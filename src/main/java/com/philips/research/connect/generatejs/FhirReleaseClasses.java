package com.philips.research.connect.generatejs;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.util.*;

public class FhirReleaseClasses {
    private final String subDir;
    private final String destDir;
    private final boolean usePrefix;
    private List<FhirClass> fhirClassList = new ArrayList<>();
    private String version;

    public FhirReleaseClasses(String destDir, String subDir, boolean usePrefix ) {
        this.subDir = subDir;
        this.destDir = destDir;
        this.usePrefix = usePrefix;
        this.version = (usePrefix?subDir.toUpperCase()+"_":"");
    }

    public void addFhirClass(FhirClass fhirClass) {
        this.fhirClassList.add(fhirClass);
    }

    public void writeFiles() throws IOException {
        cleanUpClasses();
        this.fhirClassList.stream().forEach( fhirClass -> {
           writeFile( subDir, fhirClass );
        });

    }

    public String getPublicApi() {
        String publicApi="";
        for ( FhirClass fhirClass: this.fhirClassList ) {
            publicApi+="export * from './lib/"+(this.usePrefix?subDir+"/":"") + version+fhirClass.getName() + "';\n" ;
        }
        return publicApi;
    }

    private void cleanUpClasses() {

        // replace resourceContainer by DomainResource
        System.out.println("replace ResourceContaner by DomainResource");
        fhirClassList.stream()
                .forEach( fhirClass -> fhirClass.replaceElementType( "ResourceContainer", "DomainResource"));

        // Bundle should be a DomainResource resourceContainer by Resource
        System.out.println("Bundle should have base DomainResource");
        fhirClassList.stream()
                .filter( fhirClass -> fhirClass.getName().equals("Bundle"))
                .forEach( fhirClass -> fhirClass.setBase("DomainResource"));

        // Extension should hold a url field
        System.out.println("Extension should have url field");
        fhirClassList.stream()
                .filter( fhirClass -> fhirClass.getName().equals( "Extension"))
                .forEach( fhirClass -> fhirClass.addElement("url","string","0","1" ));


        // remove empty classes
        System.out.println("replace empty classes by string, set enum");
        fhirClassList.stream()
                .filter( fhirClass -> fhirClass.hasNoElements()  )
                .forEach( fhirClass -> {
                    String sourceName = fhirClass.getName();
                    String enumName = sourceName+"Enum";
                    if ( FhirBaseType.isBaseType( sourceName )){
                    } else if ( fhirClassExists(enumName)){
                        fhirClassList.forEach( fc -> {
                            fc.replaceType( sourceName, enumName );
                        });
                    } else if ( !sourceName.endsWith("Enum") ){
                        fhirClassList.forEach( fc -> {
                            fc.replaceType( sourceName, FhirBaseType.STRING );
                        });
                    }

                });

        // remove empty classes
        Iterator< FhirClass> it = fhirClassList.iterator();
        while (  it.hasNext() ){
            FhirClass fc = it.next();
            if (  fc.hasNoElements() && fc.hasNoEnumValues() ){
                System.out.println("REMOVE "+fc.getName());
                it.remove();
            }
        }

        // replace non existing classes by string
        Set<String> missingTypes = new TreeSet<>();
        fhirClassList.stream()
                .forEach( fhirClass -> fhirClass.getTypes().stream()
                        .filter( type -> !fhirClassExists( type ))
                        .forEach( type -> {
                            System.out.println("REMOVE "+type);
                            missingTypes.add(type);
                        })
                );
        missingTypes.remove(FhirBaseType.STRING );
        missingTypes.remove(FhirBaseType.BOOLEAN );

        missingTypes.stream().forEach( mt -> System.out.println("Missing "+mt));
        fhirClassList.stream()
                .forEach( fhirClass -> {
                    missingTypes.stream().forEach( mt -> fhirClass.replaceElementType(mt,FhirBaseType.STRING ));
                });
        // add missing resourceType
        fhirClassList.stream()
//                .filter( fhirClass -> fhirClass.getName().equals("DomainResource"))
                .filter( fhirClass -> fhirClass.getName().equals("Resource"))
                .filter( fhirClass -> !fhirClass.hasElement("resourceType"))
                .forEach( fhirClass -> {
                    System.out.println("ADD resourcetype TO "+fhirClass.getName());
                    fhirClass.addElement("resourceType",FhirBaseType.STRING,""+0,""+1);
                });
    }

    private boolean fhirClassExists(String type) {
        return this.fhirClassList.stream()
                .anyMatch( fhirClass -> fhirClass.getName().equals( type ));
    }

    private void writeFile(String subDir, FhirClass fhirClass)  {
        try {
            String filename =fhirClass.getName();
            System.out.println("write file - "+version +" - "+filename);
            String content = fhirClass.toJavaScript();
            BufferedWriter writer = null;
            String prefix = subDir.toUpperCase();
//            writer = new BufferedWriter(new FileWriter(subDir+"/"+filename+".ts"));
//            writer = new BufferedWriter(new FileWriter("angular/projects/"+subDir+"/src/lib/fhir/"+filename+".ts"));
//            writer = new BufferedWriter(new FileWriter("angular2/projects/fhir2angular/src/lib//"+subDir+"/"+version+filename+".ts"));
//            writer = new BufferedWriter(new FileWriter(destDir+"/"+subDir+"/"+(usePrefix?version:"")+filename+".ts"));
            writer = new BufferedWriter(new FileWriter(destDir+"/"+(usePrefix?version:"")+filename+".ts"));
//C:\Data\CONNECT\github\fhir-2-angular\angular2\projects\fhir2angular\src\lib\r5

            writer.write(content);
            writer.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    public void toJavaScript() {


        for ( FhirClass fhirClass: fhirClassList ){
            System.out.println(fhirClass.toJavaScript());
        }

    }

    public int nClasses() {
        return this.fhirClassList.size();
    }

    public String getVersion() {
        return  version;
    }

}

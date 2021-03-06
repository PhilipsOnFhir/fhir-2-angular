package com.philips.research.connect.generatejs;


import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

public class GenerateJavaScript {


    public static void main(String[] args ) throws ParserConfigurationException, IOException, SAXException {

        generateOne("dstu2");
        generateOne("stu3");
        generateOne("r4");
        generateOne("r4_1");
        generateCommon();
        return;


    }

    private static void generateOne(String release ) throws IOException {
        String publicApi;

        publicApi = generateFilesForDir(
                "src/main/resources/"+release+"/fhir-codegen-xsd",
                "angular2/projects/fhir2angular-"+release+"/src/lib",
                release, false);

        String filename ="angular2/projects/fhir2angular-"+release+"/src/public-api.ts";
        System.out.println("write file "+filename);
        BufferedWriter writer = null;
//            writer = new BufferedWriter(new FileWriter(subDir+"/"+filename+".ts"));
        writer = new BufferedWriter(new FileWriter(filename));
        writer.write( publicApi );
        writer.close();

        return;
    }

    public static void generateCommon() throws ParserConfigurationException, IOException, SAXException {

        String publicApiDstu2;
        String publicApiStu3;
        String publicApiR4;
        String publicApiR5;

        publicApiDstu2 = generateFilesForDir("src/main/resources/dstu2/fhir-codegen-xsd","dstu2");
        publicApiStu3 = generateFilesForDir("src/main/resources/stu3/fhir-codegen-xsd", "stu3" );
        publicApiR4 = generateFilesForDir("src/main/resources/r4/fhir-codegen-xsd","r4");
        publicApiR5 = generateFilesForDir("src/main/resources/r4/fhir-codegen-xsd","r4_1");

        String filename ="angular2/projects/fhir2angular/src/public-api.ts";
        System.out.println("write file "+filename);
        BufferedWriter writer = null;
//            writer = new BufferedWriter(new FileWriter(subDir+"/"+filename+".ts"));
        writer = new BufferedWriter(new FileWriter(filename));
        writer.write( publicApiDstu2+publicApiStu3+publicApiR4+publicApiR5 );
        writer.close();

        return;


    }

    private static String generateFilesForDir(String sourceDir, String subDir) throws IOException {
        return generateFilesForDir(sourceDir, "angular2/projects/fhir2angular/src/lib//"+subDir+"/", subDir, true);
    }

    private static String generateFilesForDir(String sourceDir, String destDir, String subDir, boolean usePrefix) throws IOException {
        String publicApi = "";
        List<File> fileList = Files.walk(Paths.get(sourceDir))
                .filter(Files::isRegularFile)
                .map(Path::toFile)
                .collect(Collectors.toList());
        FhirReleaseClasses fhirReleaseClasses = new FhirReleaseClasses( destDir, subDir, usePrefix );

        for( File file: fileList ){
            handleFile( fhirReleaseClasses, file);
        }
        fhirReleaseClasses.writeFiles();
        publicApi+=fhirReleaseClasses.getPublicApi();

        return publicApi;
    }

    private static void handleFile(FhirReleaseClasses fhirReleaseClasses, File file)  {
        try{
            System.out.println(file.getName());
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(file);
            doc.getDocumentElement().normalize();
            System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
            System.out.println("----------------------------");
            Node nNode = doc.getDocumentElement();

            processComplexAndSimpleType( fhirReleaseClasses, nNode );


            System.out.println("================");
        }
        catch ( Exception e) {
            System.out.println(e);
            //e.printStackTrace();
        }
    }

    static final String offset = "                                            ";
    static void processComplexAndSimpleType(FhirReleaseClasses fhirReleaseClasses, Node node) {
//        System.out.print( offset.substring(0,n));
        switch( node.getNodeName() ){
            case "xs:simpleType":
            case "xs:complexType":
                System.out.print( "Class : ");
                System.out.print( node.getAttributes().getNamedItem("name").getNodeValue() );
                System.out.println();
                FhirClass fhirClass = new FhirClass( fhirReleaseClasses.getVersion(), node.getAttributes().getNamedItem("name").getNodeValue());
//                findExtension( fhirClass, node );
                processNodeElements( fhirClass, node );
                fhirReleaseClasses.addFhirClass( fhirClass );
//                System.out.println( fhirClass.toJavaScript() );
                System.out.println("+++++++++++++++++++++");
                break;
            default:
//                System.out.println( "?"+node.getNodeName()+":"+node.getNodeValue());
                NodeList nodeList = node.getChildNodes();
                for ( int i=0; i<nodeList.getLength(); i++ ){
                    processComplexAndSimpleType( fhirReleaseClasses, nodeList.item(i)  ) ;
                }
        }
    }

    private static void processNodeElements(FhirClass fhirClass, Node elementNode) {
        switch( elementNode.getNodeName() ){
            case "xs:element":
                String name = getValue( elementNode, "name");
                String type = getValue( elementNode, "type");
                String minOccurs = getValue( elementNode, "minOccurs");;
                String maxOccurs = getValue( elementNode, "maxOccurs");;
//                boolean isarray = !maxOccurs.equals("1");
//                System.out.println(String.format( "name: %s, type: %s, array: %b", name,type,isarray));
                if ( name!=null ){ name = name.replace("[x]",""); };
                fhirClass.addElement( name, type, minOccurs, maxOccurs );
                break;
            case "xs:enumeration":
                if ( elementNode.getAttributes()!=null ) {
                    Node enumurationValue = elementNode.getAttributes().getNamedItem("value");
                    if (enumurationValue != null) {
//                        fhirClass.setBase(elementNode.getAttributes().getNamedItem("base").getNodeValue());
//                        System.out.println("=== enum "+enumurationValue.getNodeValue() );
                        fhirClass.addEnumValue( enumurationValue.getNodeValue());
                    }

                }
            case "xs:extension":
                if ( elementNode.getAttributes()!=null ) {
                    Node base = elementNode.getAttributes().getNamedItem("base");
                    if (base != null) {
                        fhirClass.setBase(elementNode.getAttributes().getNamedItem("base").getNodeValue());
                    }
                }
            default:
//                System.out.println( "?"+node.getNodeName()+":"+node.getNodeValue());
                NodeList nodeList = elementNode.getChildNodes();
                for ( int i=0; i<nodeList.getLength(); i++ ){
                    processNodeElements(fhirClass, nodeList.item(i)) ;
                }
        }

    }

    private static String getValue(Node elementNode, String name) {
        Node node = elementNode.getAttributes().getNamedItem(name);
        if ( node!=null ){
            return node.getNodeValue();
        }
        return null;
    }
}

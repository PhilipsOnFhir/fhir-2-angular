package com.philips.research.connect.generatejs;


import org.w3c.dom.Document;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.SAXException;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.parsers.ParserConfigurationException;
import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;
import java.util.stream.Collectors;

public class GenerateJavaScript {

    public static void main( String[] args ) throws ParserConfigurationException, IOException, SAXException {

        generateFilesForDir("src/main/resources/dstu2/fhir-codegen-xsd","dstu2");
        generateFilesForDir("src/main/resources/dstu3/fhir-codegen-xsd","dstu3");
        generateFilesForDir("src/main/resources/r4/fhir-codegen-xsd","r4");
        return;


    }

    private static void generateFilesForDir(String sourceDir, String subDir) throws IOException {
        List<File> fileList = Files.walk(Paths.get(sourceDir))
                .filter(Files::isRegularFile)
                .map(Path::toFile)
                .collect(Collectors.toList());
        FhirClassFile fhirClassFile = new FhirClassFile();
        for( File file: fileList ){
            handleFile( fhirClassFile, file);
        }
        fhirClassFile.writeFiles(subDir);
    }

    private static void handleFile(FhirClassFile fhirClassFile, File file)  {
        try{
            System.out.println(file.getName());
            DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
            DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
            Document doc = dBuilder.parse(file);
            doc.getDocumentElement().normalize();
            System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
            System.out.println("----------------------------");
            Node nNode = doc.getDocumentElement();

            processComplexAndSimpleType( fhirClassFile, nNode );


            System.out.println("================");
        }
        catch ( Exception e) {
            System.out.println(e);
            //e.printStackTrace();
        }
    }

    static final String offset = "                                            ";
    static void processComplexAndSimpleType(FhirClassFile fhirClassFile, Node node) {
//        System.out.print( offset.substring(0,n));
        switch( node.getNodeName() ){
            case "xs:simpleType":
            case "xs:complexType":
                System.out.print( "Class : ");
                System.out.print( node.getAttributes().getNamedItem("name").getNodeValue() );
                System.out.println();
                FhirClass fhirClass = new FhirClass(node.getAttributes().getNamedItem("name").getNodeValue());
//                findExtension( fhirClass, node );
                processNodeElements( fhirClass, node );
                fhirClassFile.addFhirClass( fhirClass );
//                System.out.println( fhirClass.toJavaScript() );
                System.out.println("+++++++++++++++++++++");
                break;
            default:
//                System.out.println( "?"+node.getNodeName()+":"+node.getNodeValue());
                NodeList nodeList = node.getChildNodes();
                for ( int i=0; i<nodeList.getLength(); i++ ){
                    processComplexAndSimpleType( fhirClassFile, nodeList.item(i)  ) ;
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

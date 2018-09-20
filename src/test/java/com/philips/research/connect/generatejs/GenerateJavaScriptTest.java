package com.philips.research.connect.generatejs;

import org.junit.Test;
import org.w3c.dom.Document;
import org.w3c.dom.Node;
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

import static com.philips.research.connect.generatejs.GenerateJavaScript.processComplexAndSimpleType;
import static org.junit.Assert.*;

public class GenerateJavaScriptTest {
    @Test
    public void TestXsdJava() throws IOException, SAXException, ParserConfigurationException {
        File file = Paths.get("C:\\Data\\CONNECT\\SmartOnFhir\\fhirviewer\\generateJs\\src\\main\\resources\\fhir-codegen-xsd\\fhir-base.xsd").toFile();

        DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
        DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
        Document doc = dBuilder.parse(file);
        doc.getDocumentElement().normalize();
        System.out.println("Root element :" + doc.getDocumentElement().getNodeName());
        System.out.println("----------------------------");
        Node nNode = doc.getDocumentElement();

        FhirClassFile fhirClassFile = new FhirClassFile();
        processComplexAndSimpleType( fhirClassFile, nNode );

        assertEquals( fhirClassFile.nClasses(), 139 );

    }

}

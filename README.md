This contains java program that generates Angular2+ representations of the different FHIR classes and enumerations. 
The classes are based on the code-gen download that is published on the FHIR web-site (https://www.hl7.org/fhir/fhir-codegen-xsd.zip).
This file contains the structure definition of the current fhir build.

The src/main/resources contains an instance of this file for the different FHIR versions..

Running the GenerateJavaScript class, will read these files and generate the angular classes.

Make sure Temp/ts exists

Set idea to java version 8. 
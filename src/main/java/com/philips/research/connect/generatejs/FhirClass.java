package com.philips.research.connect.generatejs;


import org.apache.commons.lang3.math.NumberUtils;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class FhirClass {
    private final String name;
    private String base = null;
    private List<FhirClassElement> elements = new ArrayList<>();
    private Set<String> types = new TreeSet<>();
    private Set<String> enumValues = new TreeSet<>();

    FhirClass(String name ){

        String className = name.replace(".", "_");

        if (className.endsWith("-list")) {
            // enum
            className = name.substring(0, name.indexOf("-"))+"Enum";
        }
        this.name = className;
    }


    public void setBase(String base) {
        this.base = base;
        types.add(base);
    }

    public void addElement(String name, String type, String minOccurs, String maxOccurs) {
        FhirClassElement fhirClassElement = new FhirClassElement( name, type, minOccurs, maxOccurs);
        this.elements.add( fhirClassElement );
        if ( Character.isUpperCase( fhirClassElement.getType().charAt(0))) {
            this.types.add(fhirClassElement.getType());
        }
    }

    public void replaceElementType(String source, String target ){
        elements.stream()
                .filter( element -> element.getType().equals(source))
                .forEach( element -> element.setType(target));
        ;
        types.remove(source);
        types.add(target);
    }

//    public boolean isEnumeration(){
//        return base!=null && base.equals("Element");
//    }

    public String toJavaScript() {
        if ( this.enumValues.isEmpty() ){
            return toClassJavaScript();
        }
        else {
            return toEnumClassJavaScript();
        }
    }

    private String toEnumClassJavaScript() {
        this.types.remove(this.getName());
        this.types.remove("string");

        String result = "";
        for ( String importType: types ){
            result += String.format("import { %s } from './%s'\n",importType, importType );
        }
        result += "\n";

        result+="export enum "+name;
        result+="{\n";
        for ( String enumValue: this.enumValues ){
            String enumString = enumValue.toUpperCase();
            enumString=enumString.replace("-","_");
            enumString=enumString.replace(".","_");
            enumString=enumString.replace("/","_");
            enumString = checkAndReplace( enumString, "=", "EQUALS");
            enumString = checkAndReplace( enumString, "!=", "UNEQUALS");
            enumString = checkAndReplace( enumString, "<", "SMALLERTHAN");
            enumString = checkAndReplace( enumString, "<=", "SMALLEREQUALTHAN");
            enumString = checkAndReplace( enumString, ">", "LARGERTHAN");
            enumString = checkAndReplace( enumString, ">=", "LARGEREQUALTHAN");
            if ( NumberUtils.isCreatable(enumString ) ){
                enumString = "NUMBER"+enumString;
            }
            if ( NumberUtils.isCreatable(String.valueOf(enumString.charAt(0)))){
                enumString="N"+enumString;
            }
            result+="    " + enumString+ " = '"+enumValue+"',\n";
        }
        for ( FhirClassElement elementName: elements ){
            result+=elementName.toJavaScript();
        }
        result+="}\n";
        return result;
    }

    private String checkAndReplace(String enumString, String checkValue, String target) {
        if ( enumString.equals(checkValue) ){
            return target;
        }
        return enumString;
    }

    String toClassJavaScript() {

        this.types.remove(this.getName());
        this.types.remove("string");

        if ( this.base!=null ){ types.add(this.base);}

        String result = "";
        for ( String importType: types ){
            // import { Account_coverage } from './Account_coverage'
            result += String.format("import { %s } from './%s'\n",importType, importType );
        }
        result += "\n";

        result+="export class "+name;
        if ( base!=null ){
            result+= "      extends "+base+"\n";
        }
        result+="{\n";
        result+="\n   static def : string = '"+name+"';\n";
        for ( FhirClassElement elementName: elements ){
            result+=elementName.toJavaScript();
        }
        result+="}\n";
        return result;
    }

    public void replaceType( String sourceType, String newType) {
        for( FhirClassElement fhirClassElement: elements ){
            if (fhirClassElement.getType().equals(sourceType)){
                fhirClassElement.setType(newType);
                types.remove(sourceType);
                types.add(newType);
            }
        }
    }

    String getName() {
        return this.name;
    }


    public Set<String> getTypes() {
        return types;
    }

    public void addEnumValue(String nodeValue) {
        this.enumValues.add( nodeValue );
    }

    public boolean hasNoElements() {
        return elements.isEmpty();
    }

    public boolean hasNoEnumValues() {
        return this.enumValues.isEmpty();
    }

    public boolean hasElement(String resourceType) {
        return this.elements.stream().anyMatch( fhirClassElement -> fhirClassElement.getName().equals(resourceType));
    }
}

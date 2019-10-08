package com.philips.research.connect.generatejs;

import java.awt.font.ImageGraphicAttribute;

public class FhirClassElement {
    private final String name;
    private final String version;
    private String versionType;
    private String type;
    private final boolean isArray;


    public FhirClassElement(String version, String name, String type, String minOccurs, String maxOccurs) {
        this.name = name;
        this.version = version;
        setType( type );
//        if ( type == null ){
//            this.type = FhirBaseType.STRING;
//            this.versionType = FhirBaseType.STRING;
//        } else if ( Character.isUpperCase( type.charAt( 0 ) )){
//            this.type = type;
//            this.versionType = version+type;
//        } else if ( FhirBaseType.isBaseType( type )){
//            this.type = type;
//            this.versionType = type;
//        } else {
//            this.type = FhirBaseType.STRING;
//            this.versionType = FhirBaseType.STRING;
//        }


//        this.type =
//            (   type!=null &&( Character.isUpperCase(type.charAt(0)) || FhirBaseType.isBaseType( type ))?
//                type:
//                FhirBaseType.STRING
//            );
//        this.type = ( (type!=null && Character.isUpperCase(type.charAt(0)) )? type : "string" );
//        this.type = ( type.equals( "boolean" )? "boolean": type );
        this.type = this.type.replace(".","_");
        this.versionType = this.versionType.replace(".","_");
        this.isArray = maxOccurs!=null&&!maxOccurs.equals("1");
    }

    public String toJavaScript() {
        String result = "";
        result = String.format("   %s : %s ", name, versionType);
        if ( isArray ){
            result+="[]";
        }
        result+=";\n";
        return result;
    }

    public String getType() {
        return type;
    }

    public void setType(String newType) {
        if ( newType == null ){
            this.type = FhirBaseType.STRING;
            this.versionType = FhirBaseType.STRING;
        } else if ( Character.isUpperCase( newType.charAt( 0 ) )){
            this.type = newType;
            this.versionType = version+newType;
        } else if ( FhirBaseType.isBaseType( newType )){
            this.type = newType;
            this.versionType = newType;
        } else {
            this.type = FhirBaseType.STRING;
            this.versionType = FhirBaseType.STRING;
        }
    }

    public String getName() {
        return this.name;
    }
}

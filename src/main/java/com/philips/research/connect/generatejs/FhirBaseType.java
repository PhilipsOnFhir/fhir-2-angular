package com.philips.research.connect.generatejs;

public class FhirBaseType {
    public static final String STRING = "string";
    public static final String BOOLEAN = "boolean";

    public static boolean isBaseType( String type ){
        return type.equals( STRING ) || type.equals( BOOLEAN );
    }
}

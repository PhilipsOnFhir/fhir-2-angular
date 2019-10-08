package com.philips.research.connect.generatejsold;

import java.awt.font.ImageGraphicAttribute;

public class FhirClassElement {
    private final String name;
    private String type;
    private final boolean isArray;


    public FhirClassElement(String name, String type, String minOccurs, String maxOccurs) {
        this.name = name;
        this.type = ( (type!=null && Character.isUpperCase(type.charAt(0)) )? type : "string" );
        this.type = this.type.replace(".","_");
        this.isArray = maxOccurs!=null&&!maxOccurs.equals("1");
    }

    public String toJavaScript() {
        String result = "";
        result = String.format("   %s : %s ", name, type);
        if ( isArray ){
            result+="[]";
        }
        result+=";\n";
        return result;
    }

    public String getType() {
        return type;
    }

    public void setType(String string) {
        this.type =string;
    }

    public String getName() {
        return this.name;
    }
}

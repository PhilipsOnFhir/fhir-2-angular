import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CodeSystem_Property1      extends R4_BackboneElement
{

   static def : string = 'CodeSystem_Property1';
   code : string ;
   valueCode : string ;
   valueCoding : R4_Coding ;
   valueString : string ;
   valueInteger : string ;
   valueBoolean : boolean ;
   valueDateTime : string ;
   valueDecimal : string ;
}

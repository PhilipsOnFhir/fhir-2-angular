import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CodeSystem_Property1      extends R4_1_BackboneElement
{

   static def : string = 'CodeSystem_Property1';
   code : string ;
   valueCode : string ;
   valueCoding : R4_1_Coding ;
   valueString : string ;
   valueInteger : string ;
   valueBoolean : boolean ;
   valueDateTime : string ;
   valueDecimal : string ;
}

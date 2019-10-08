import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_CodeSystem_Property1      extends STU3_BackboneElement
{

   static def : string = 'CodeSystem_Property1';
   code : string ;
   valueCode : string ;
   valueCoding : STU3_Coding ;
   valueString : string ;
   valueInteger : string ;
   valueBoolean : boolean ;
   valueDateTime : string ;
}

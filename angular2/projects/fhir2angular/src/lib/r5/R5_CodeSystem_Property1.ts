import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CodeSystem_Property1      extends R5_BackboneElement
{

   static def : string = 'CodeSystem_Property1';
   code : string ;
   valueCode : string ;
   valueCoding : R5_Coding ;
   valueString : string ;
   valueInteger : string ;
   valueBoolean : boolean ;
   valueDateTime : string ;
   valueDecimal : string ;
}

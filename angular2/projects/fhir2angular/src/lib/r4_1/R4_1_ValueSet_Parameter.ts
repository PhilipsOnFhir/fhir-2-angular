import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ValueSet_Parameter      extends R4_1_BackboneElement
{

   static def : string = 'ValueSet_Parameter';
   name : string ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
   valueUri : string ;
   valueCode : string ;
   valueDateTime : string ;
}

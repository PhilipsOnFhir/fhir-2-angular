import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ValueSet_Parameter      extends R4_BackboneElement
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

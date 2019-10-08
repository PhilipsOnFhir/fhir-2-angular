import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ValueSet_Parameter      extends R5_BackboneElement
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

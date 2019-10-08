import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ValueSet_Parameter      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Parameter';
   name : string ;
   valueString : string ;
   valueBoolean : boolean ;
   valueInteger : string ;
   valueDecimal : string ;
   valueUri : string ;
   valueCode : string ;
}

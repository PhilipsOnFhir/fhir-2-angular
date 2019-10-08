import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ValueSet_Concept1 } from './DSTU2_ValueSet_Concept1'
import { DSTU2_ValueSet_Filter } from './DSTU2_ValueSet_Filter'

export class DSTU2_ValueSet_Include      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : DSTU2_ValueSet_Concept1 [];
   filter : DSTU2_ValueSet_Filter [];
}

import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ValueSet_Concept } from './R4_1_ValueSet_Concept'
import { R4_1_ValueSet_Filter } from './R4_1_ValueSet_Filter'

export class R4_1_ValueSet_Include      extends R4_1_BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : R4_1_ValueSet_Concept [];
   filter : R4_1_ValueSet_Filter [];
   valueSet : string [];
}

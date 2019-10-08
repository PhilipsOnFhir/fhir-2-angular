import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ValueSet_Concept } from './STU3_ValueSet_Concept'
import { STU3_ValueSet_Filter } from './STU3_ValueSet_Filter'

export class STU3_ValueSet_Include      extends STU3_BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : STU3_ValueSet_Concept [];
   filter : STU3_ValueSet_Filter [];
   valueSet : string [];
}

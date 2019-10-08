import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ValueSet_Concept } from './R4_ValueSet_Concept'
import { R4_ValueSet_Filter } from './R4_ValueSet_Filter'

export class R4_ValueSet_Include      extends R4_BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : R4_ValueSet_Concept [];
   filter : R4_ValueSet_Filter [];
   valueSet : string [];
}

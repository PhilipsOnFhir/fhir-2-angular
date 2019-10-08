import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ValueSet_Concept } from './R5_ValueSet_Concept'
import { R5_ValueSet_Filter } from './R5_ValueSet_Filter'

export class R5_ValueSet_Include      extends R5_BackboneElement
{

   static def : string = 'ValueSet_Include';
   system : string ;
   version : string ;
   concept : R5_ValueSet_Concept [];
   filter : R5_ValueSet_Filter [];
   valueSet : string [];
}

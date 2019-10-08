import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ConceptMap_Element } from './R4_1_ConceptMap_Element'
import { R4_1_ConceptMap_Unmapped } from './R4_1_ConceptMap_Unmapped'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ConceptMap_Group      extends R4_1_BackboneElement
{

   static def : string = 'ConceptMap_Group';
   source : string ;
   sourceVersion : string ;
   target : string ;
   targetVersion : string ;
   element : R4_1_ConceptMap_Element [];
   unmapped : R4_1_ConceptMap_Unmapped ;
}

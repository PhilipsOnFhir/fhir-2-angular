import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConceptMap_Element } from './R4_ConceptMap_Element'
import { R4_ConceptMap_Unmapped } from './R4_ConceptMap_Unmapped'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ConceptMap_Group      extends R4_BackboneElement
{

   static def : string = 'ConceptMap_Group';
   source : string ;
   sourceVersion : string ;
   target : string ;
   targetVersion : string ;
   element : R4_ConceptMap_Element [];
   unmapped : R4_ConceptMap_Unmapped ;
}

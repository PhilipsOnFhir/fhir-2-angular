import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ConceptMap_Element } from './R5_ConceptMap_Element'
import { R5_ConceptMap_Unmapped } from './R5_ConceptMap_Unmapped'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ConceptMap_Group      extends R5_BackboneElement
{

   static def : string = 'ConceptMap_Group';
   source : string ;
   sourceVersion : string ;
   target : string ;
   targetVersion : string ;
   element : R5_ConceptMap_Element [];
   unmapped : R5_ConceptMap_Unmapped ;
}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ConceptMap_Element } from './STU3_ConceptMap_Element'
import { STU3_ConceptMap_Unmapped } from './STU3_ConceptMap_Unmapped'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ConceptMap_Group      extends STU3_BackboneElement
{

   static def : string = 'ConceptMap_Group';
   source : string ;
   sourceVersion : string ;
   target : string ;
   targetVersion : string ;
   element : STU3_ConceptMap_Element [];
   unmapped : STU3_ConceptMap_Unmapped ;
}

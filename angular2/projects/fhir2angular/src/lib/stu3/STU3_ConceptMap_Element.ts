import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ConceptMap_Target } from './STU3_ConceptMap_Target'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ConceptMap_Element      extends STU3_BackboneElement
{

   static def : string = 'ConceptMap_Element';
   code : string ;
   display : string ;
   target : STU3_ConceptMap_Target [];
}

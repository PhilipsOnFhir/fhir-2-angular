import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ConceptMap_Target } from './R4_1_ConceptMap_Target'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ConceptMap_Element      extends R4_1_BackboneElement
{

   static def : string = 'ConceptMap_Element';
   code : string ;
   display : string ;
   target : R4_1_ConceptMap_Target [];
}

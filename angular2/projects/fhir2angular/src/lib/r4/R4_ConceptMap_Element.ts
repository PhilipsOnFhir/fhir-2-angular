import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConceptMap_Target } from './R4_ConceptMap_Target'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ConceptMap_Element      extends R4_BackboneElement
{

   static def : string = 'ConceptMap_Element';
   code : string ;
   display : string ;
   target : R4_ConceptMap_Target [];
}

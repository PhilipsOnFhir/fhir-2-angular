import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ConceptMap_Target } from './R5_ConceptMap_Target'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ConceptMap_Element      extends R5_BackboneElement
{

   static def : string = 'ConceptMap_Element';
   code : string ;
   display : string ;
   target : R5_ConceptMap_Target [];
}

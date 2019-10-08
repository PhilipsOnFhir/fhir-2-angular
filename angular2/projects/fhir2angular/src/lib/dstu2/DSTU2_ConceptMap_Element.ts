import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ConceptMap_Target } from './DSTU2_ConceptMap_Target'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ConceptMap_Element      extends DSTU2_BackboneElement
{

   static def : string = 'ConceptMap_Element';
   codeSystem : string ;
   code : string ;
   target : DSTU2_ConceptMap_Target [];
}

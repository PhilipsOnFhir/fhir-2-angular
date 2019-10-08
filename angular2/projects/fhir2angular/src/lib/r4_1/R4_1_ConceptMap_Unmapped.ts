import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ConceptMapGroupUnmappedModeEnum } from './R4_1_ConceptMapGroupUnmappedModeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ConceptMap_Unmapped      extends R4_1_BackboneElement
{

   static def : string = 'ConceptMap_Unmapped';
   mode : R4_1_ConceptMapGroupUnmappedModeEnum ;
   code : string ;
   display : string ;
   url : string ;
}

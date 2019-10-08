import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ConceptMapGroupUnmappedModeEnum } from './R4_ConceptMapGroupUnmappedModeEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ConceptMap_Unmapped      extends R4_BackboneElement
{

   static def : string = 'ConceptMap_Unmapped';
   mode : R4_ConceptMapGroupUnmappedModeEnum ;
   code : string ;
   display : string ;
   url : string ;
}

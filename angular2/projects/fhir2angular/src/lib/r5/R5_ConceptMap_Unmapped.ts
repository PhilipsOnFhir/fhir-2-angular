import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ConceptMapGroupUnmappedModeEnum } from './R5_ConceptMapGroupUnmappedModeEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ConceptMap_Unmapped      extends R5_BackboneElement
{

   static def : string = 'ConceptMap_Unmapped';
   mode : R5_ConceptMapGroupUnmappedModeEnum ;
   code : string ;
   display : string ;
   url : string ;
}

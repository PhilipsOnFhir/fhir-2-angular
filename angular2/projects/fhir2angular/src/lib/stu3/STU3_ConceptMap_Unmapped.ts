import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ConceptMapGroupUnmappedModeEnum } from './STU3_ConceptMapGroupUnmappedModeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ConceptMap_Unmapped      extends STU3_BackboneElement
{

   static def : string = 'ConceptMap_Unmapped';
   mode : STU3_ConceptMapGroupUnmappedModeEnum ;
   code : string ;
   display : string ;
   url : string ;
}

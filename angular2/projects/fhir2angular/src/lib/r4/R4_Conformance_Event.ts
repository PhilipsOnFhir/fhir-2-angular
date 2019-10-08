import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_ConformanceEventModeEnum } from './R4_ConformanceEventModeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MessageSignificanceCategoryEnum } from './R4_MessageSignificanceCategoryEnum'
import { R4_Reference } from './R4_Reference'

export class R4_Conformance_Event      extends R4_BackboneElement
{

   static def : string = 'Conformance_Event';
   code : R4_Coding ;
   category : R4_MessageSignificanceCategoryEnum ;
   mode : R4_ConformanceEventModeEnum ;
   focus : string ;
   request : R4_Reference ;
   response : R4_Reference ;
   documentation : string ;
}

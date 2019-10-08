import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ConformanceEventModeEnum } from './STU3_ConformanceEventModeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_MessageSignificanceCategoryEnum } from './STU3_MessageSignificanceCategoryEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Conformance_Event      extends STU3_BackboneElement
{

   static def : string = 'Conformance_Event';
   code : STU3_Coding ;
   category : STU3_MessageSignificanceCategoryEnum ;
   mode : STU3_ConformanceEventModeEnum ;
   focus : string ;
   request : STU3_Reference ;
   response : STU3_Reference ;
   documentation : string ;
}

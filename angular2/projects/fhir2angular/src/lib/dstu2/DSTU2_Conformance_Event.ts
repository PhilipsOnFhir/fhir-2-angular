import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_ConformanceEventModeEnum } from './DSTU2_ConformanceEventModeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_MessageSignificanceCategoryEnum } from './DSTU2_MessageSignificanceCategoryEnum'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Conformance_Event      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Event';
   code : DSTU2_Coding ;
   category : DSTU2_MessageSignificanceCategoryEnum ;
   mode : DSTU2_ConformanceEventModeEnum ;
   focus : string ;
   request : DSTU2_Reference ;
   response : DSTU2_Reference ;
   documentation : string ;
}

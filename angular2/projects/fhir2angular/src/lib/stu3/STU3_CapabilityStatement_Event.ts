import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EventCapabilityModeEnum } from './STU3_EventCapabilityModeEnum'
import { STU3_MessageSignificanceCategoryEnum } from './STU3_MessageSignificanceCategoryEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'

export class STU3_CapabilityStatement_Event      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Event';
   code : STU3_Coding ;
   category : STU3_MessageSignificanceCategoryEnum ;
   mode : STU3_EventCapabilityModeEnum ;
   focus : STU3_ResourceTypeEnum ;
   request : STU3_Reference ;
   response : STU3_Reference ;
   documentation : string ;
}

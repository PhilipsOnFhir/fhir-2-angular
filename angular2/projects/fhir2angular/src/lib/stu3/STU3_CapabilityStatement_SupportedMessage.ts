import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_EventCapabilityModeEnum } from './STU3_EventCapabilityModeEnum'
import { STU3_Reference } from './STU3_Reference'

export class STU3_CapabilityStatement_SupportedMessage      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_SupportedMessage';
   mode : STU3_EventCapabilityModeEnum ;
   definition : STU3_Reference ;
}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CapabilityStatement_Endpoint } from './STU3_CapabilityStatement_Endpoint'
import { STU3_CapabilityStatement_Event } from './STU3_CapabilityStatement_Event'
import { STU3_CapabilityStatement_SupportedMessage } from './STU3_CapabilityStatement_SupportedMessage'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_CapabilityStatement_Messaging      extends STU3_BackboneElement
{

   static def : string = 'CapabilityStatement_Messaging';
   endpoint : STU3_CapabilityStatement_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   supportedMessage : STU3_CapabilityStatement_SupportedMessage [];
   event : STU3_CapabilityStatement_Event [];
}

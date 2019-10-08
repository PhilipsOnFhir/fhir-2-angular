import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CapabilityStatement_Endpoint } from './R4_1_CapabilityStatement_Endpoint'
import { R4_1_CapabilityStatement_SupportedMessage } from './R4_1_CapabilityStatement_SupportedMessage'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CapabilityStatement_Messaging      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Messaging';
   endpoint : R4_1_CapabilityStatement_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   supportedMessage : R4_1_CapabilityStatement_SupportedMessage [];
}

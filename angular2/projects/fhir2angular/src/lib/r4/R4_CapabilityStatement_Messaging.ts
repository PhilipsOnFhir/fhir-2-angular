import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CapabilityStatement_Endpoint } from './R4_CapabilityStatement_Endpoint'
import { R4_CapabilityStatement_SupportedMessage } from './R4_CapabilityStatement_SupportedMessage'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CapabilityStatement_Messaging      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Messaging';
   endpoint : R4_CapabilityStatement_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   supportedMessage : R4_CapabilityStatement_SupportedMessage [];
}

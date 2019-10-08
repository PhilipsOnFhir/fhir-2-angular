import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CapabilityStatement_Endpoint } from './R5_CapabilityStatement_Endpoint'
import { R5_CapabilityStatement_SupportedMessage } from './R5_CapabilityStatement_SupportedMessage'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CapabilityStatement_Messaging      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Messaging';
   endpoint : R5_CapabilityStatement_Endpoint [];
   reliableCache : string ;
   documentation : string ;
   supportedMessage : R5_CapabilityStatement_SupportedMessage [];
}

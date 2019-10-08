import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EventCapabilityModeEnum } from './R4_EventCapabilityModeEnum'

export class R4_CapabilityStatement_SupportedMessage      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_SupportedMessage';
   mode : R4_EventCapabilityModeEnum ;
   definition : string ;
}

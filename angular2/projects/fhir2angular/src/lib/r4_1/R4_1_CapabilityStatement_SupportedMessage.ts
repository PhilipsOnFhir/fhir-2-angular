import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EventCapabilityModeEnum } from './R4_1_EventCapabilityModeEnum'

export class R4_1_CapabilityStatement_SupportedMessage      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_SupportedMessage';
   mode : R4_1_EventCapabilityModeEnum ;
   definition : string ;
}

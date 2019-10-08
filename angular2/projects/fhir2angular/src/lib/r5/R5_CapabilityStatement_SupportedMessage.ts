import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_EventCapabilityModeEnum } from './R5_EventCapabilityModeEnum'

export class R5_CapabilityStatement_SupportedMessage      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_SupportedMessage';
   mode : R5_EventCapabilityModeEnum ;
   definition : string ;
}

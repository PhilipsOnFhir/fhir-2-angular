import { R5_AuditEventAgentNetworkTypeEnum } from './R5_AuditEventAgentNetworkTypeEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_AuditEvent_Network      extends R5_BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : R5_AuditEventAgentNetworkTypeEnum ;
}

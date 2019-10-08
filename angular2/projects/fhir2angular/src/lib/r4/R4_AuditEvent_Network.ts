import { R4_AuditEventAgentNetworkTypeEnum } from './R4_AuditEventAgentNetworkTypeEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_AuditEvent_Network      extends R4_BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : R4_AuditEventAgentNetworkTypeEnum ;
}

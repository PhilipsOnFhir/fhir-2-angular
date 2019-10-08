import { R4_1_AuditEventAgentNetworkTypeEnum } from './R4_1_AuditEventAgentNetworkTypeEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_AuditEvent_Network      extends R4_1_BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : R4_1_AuditEventAgentNetworkTypeEnum ;
}

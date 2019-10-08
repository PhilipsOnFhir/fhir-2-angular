import { STU3_AuditEventAgentNetworkTypeEnum } from './STU3_AuditEventAgentNetworkTypeEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_AuditEvent_Network      extends STU3_BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : STU3_AuditEventAgentNetworkTypeEnum ;
}

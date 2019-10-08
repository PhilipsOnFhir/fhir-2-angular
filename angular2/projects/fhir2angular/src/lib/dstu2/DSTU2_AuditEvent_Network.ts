import { DSTU2_AuditEventParticipantNetworkTypeEnum } from './DSTU2_AuditEventParticipantNetworkTypeEnum'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_AuditEvent_Network      extends DSTU2_BackboneElement
{

   static def : string = 'AuditEvent_Network';
   address : string ;
   type : DSTU2_AuditEventParticipantNetworkTypeEnum ;
}

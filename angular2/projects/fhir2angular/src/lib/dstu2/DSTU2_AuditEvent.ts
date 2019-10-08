import { DSTU2_AuditEvent_Event } from './DSTU2_AuditEvent_Event'
import { DSTU2_AuditEvent_Object } from './DSTU2_AuditEvent_Object'
import { DSTU2_AuditEvent_Participant } from './DSTU2_AuditEvent_Participant'
import { DSTU2_AuditEvent_Source } from './DSTU2_AuditEvent_Source'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_AuditEvent      extends DSTU2_DomainResource
{

   static def : string = 'AuditEvent';
   event : DSTU2_AuditEvent_Event ;
   participant : DSTU2_AuditEvent_Participant [];
   source : DSTU2_AuditEvent_Source ;
   object : DSTU2_AuditEvent_Object [];
}

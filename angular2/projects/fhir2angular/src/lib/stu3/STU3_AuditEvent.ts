import { STU3_AuditEventActionEnum } from './STU3_AuditEventActionEnum'
import { STU3_AuditEventOutcomeEnum } from './STU3_AuditEventOutcomeEnum'
import { STU3_AuditEvent_Agent } from './STU3_AuditEvent_Agent'
import { STU3_AuditEvent_Entity } from './STU3_AuditEvent_Entity'
import { STU3_AuditEvent_Source } from './STU3_AuditEvent_Source'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_AuditEvent      extends STU3_DomainResource
{

   static def : string = 'AuditEvent';
   type : STU3_Coding ;
   subtype : STU3_Coding [];
   action : STU3_AuditEventActionEnum ;
   recorded : string ;
   outcome : STU3_AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : STU3_CodeableConcept [];
   agent : STU3_AuditEvent_Agent [];
   source : STU3_AuditEvent_Source ;
   entity : STU3_AuditEvent_Entity [];
}

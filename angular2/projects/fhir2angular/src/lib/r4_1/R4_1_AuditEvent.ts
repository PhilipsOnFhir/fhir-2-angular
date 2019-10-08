import { R4_1_AuditEventActionEnum } from './R4_1_AuditEventActionEnum'
import { R4_1_AuditEventOutcomeEnum } from './R4_1_AuditEventOutcomeEnum'
import { R4_1_AuditEvent_Agent } from './R4_1_AuditEvent_Agent'
import { R4_1_AuditEvent_Entity } from './R4_1_AuditEvent_Entity'
import { R4_1_AuditEvent_Source } from './R4_1_AuditEvent_Source'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_AuditEvent      extends R4_1_DomainResource
{

   static def : string = 'AuditEvent';
   type : R4_1_Coding ;
   subtype : R4_1_Coding [];
   action : R4_1_AuditEventActionEnum ;
   period : R4_1_Period ;
   recorded : string ;
   outcome : R4_1_AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : R4_1_CodeableConcept [];
   agent : R4_1_AuditEvent_Agent [];
   source : R4_1_AuditEvent_Source ;
   entity : R4_1_AuditEvent_Entity [];
}

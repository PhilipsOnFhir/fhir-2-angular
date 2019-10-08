import { R5_AuditEventActionEnum } from './R5_AuditEventActionEnum'
import { R5_AuditEventOutcomeEnum } from './R5_AuditEventOutcomeEnum'
import { R5_AuditEvent_Agent } from './R5_AuditEvent_Agent'
import { R5_AuditEvent_Entity } from './R5_AuditEvent_Entity'
import { R5_AuditEvent_Source } from './R5_AuditEvent_Source'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_AuditEvent      extends R5_DomainResource
{

   static def : string = 'AuditEvent';
   type : R5_Coding ;
   subtype : R5_Coding [];
   action : R5_AuditEventActionEnum ;
   period : R5_Period ;
   recorded : string ;
   outcome : R5_AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : R5_CodeableConcept [];
   agent : R5_AuditEvent_Agent [];
   source : R5_AuditEvent_Source ;
   entity : R5_AuditEvent_Entity [];
}

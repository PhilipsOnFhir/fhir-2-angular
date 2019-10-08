import { R4_AuditEventActionEnum } from './R4_AuditEventActionEnum'
import { R4_AuditEventOutcomeEnum } from './R4_AuditEventOutcomeEnum'
import { R4_AuditEvent_Agent } from './R4_AuditEvent_Agent'
import { R4_AuditEvent_Entity } from './R4_AuditEvent_Entity'
import { R4_AuditEvent_Source } from './R4_AuditEvent_Source'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_AuditEvent      extends R4_DomainResource
{

   static def : string = 'AuditEvent';
   type : R4_Coding ;
   subtype : R4_Coding [];
   action : R4_AuditEventActionEnum ;
   period : R4_Period ;
   recorded : string ;
   outcome : R4_AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : R4_CodeableConcept [];
   agent : R4_AuditEvent_Agent [];
   source : R4_AuditEvent_Source ;
   entity : R4_AuditEvent_Entity [];
}

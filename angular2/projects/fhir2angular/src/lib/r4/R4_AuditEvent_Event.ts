import { R4_AuditEventActionEnum } from './R4_AuditEventActionEnum'
import { R4_AuditEventOutcomeEnum } from './R4_AuditEventOutcomeEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_AuditEvent_Event      extends R4_BackboneElement
{

   static def : string = 'AuditEvent_Event';
   type : R4_Coding ;
   subtype : R4_Coding [];
   action : R4_AuditEventActionEnum ;
   dateTime : string ;
   outcome : R4_AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : R4_Coding [];
}

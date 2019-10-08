import { DSTU2_AuditEventActionEnum } from './DSTU2_AuditEventActionEnum'
import { DSTU2_AuditEventOutcomeEnum } from './DSTU2_AuditEventOutcomeEnum'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_AuditEvent_Event      extends DSTU2_BackboneElement
{

   static def : string = 'AuditEvent_Event';
   type : DSTU2_Coding ;
   subtype : DSTU2_Coding [];
   action : DSTU2_AuditEventActionEnum ;
   dateTime : string ;
   outcome : DSTU2_AuditEventOutcomeEnum ;
   outcomeDesc : string ;
   purposeOfEvent : DSTU2_Coding [];
}

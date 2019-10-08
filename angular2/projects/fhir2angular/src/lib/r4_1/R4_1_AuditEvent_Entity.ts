import { R4_1_AuditEvent_Detail } from './R4_1_AuditEvent_Detail'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AuditEvent_Entity      extends R4_1_BackboneElement
{

   static def : string = 'AuditEvent_Entity';
   what : R4_1_Reference ;
   type : R4_1_Coding ;
   role : R4_1_Coding ;
   lifecycle : R4_1_Coding ;
   securityLabel : R4_1_Coding [];
   name : string ;
   description : string ;
   query : string ;
   detail : R4_1_AuditEvent_Detail [];
}

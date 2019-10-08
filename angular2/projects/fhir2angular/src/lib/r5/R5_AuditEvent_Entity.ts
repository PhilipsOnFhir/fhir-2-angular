import { R5_AuditEvent_Detail } from './R5_AuditEvent_Detail'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_AuditEvent_Entity      extends R5_BackboneElement
{

   static def : string = 'AuditEvent_Entity';
   what : R5_Reference ;
   type : R5_Coding ;
   role : R5_Coding ;
   lifecycle : R5_Coding ;
   securityLabel : R5_Coding [];
   name : string ;
   description : string ;
   query : string ;
   detail : R5_AuditEvent_Detail [];
}

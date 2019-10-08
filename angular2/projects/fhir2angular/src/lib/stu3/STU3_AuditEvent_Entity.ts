import { STU3_AuditEvent_Detail } from './STU3_AuditEvent_Detail'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_AuditEvent_Entity      extends STU3_BackboneElement
{

   static def : string = 'AuditEvent_Entity';
   identifier : STU3_Identifier ;
   reference : STU3_Reference ;
   type : STU3_Coding ;
   role : STU3_Coding ;
   lifecycle : STU3_Coding ;
   securityLabel : STU3_Coding [];
   name : string ;
   description : string ;
   query : string ;
   detail : STU3_AuditEvent_Detail [];
}

import { R4_AuditEvent_Detail } from './R4_AuditEvent_Detail'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_AuditEvent_Object      extends R4_BackboneElement
{

   static def : string = 'AuditEvent_Object';
   identifier : R4_Identifier ;
   reference : R4_Reference ;
   type : R4_Coding ;
   role : R4_Coding ;
   lifecycle : R4_Coding ;
   securityLabel : R4_Coding [];
   name : string ;
   description : string ;
   query : string ;
   detail : R4_AuditEvent_Detail [];
}

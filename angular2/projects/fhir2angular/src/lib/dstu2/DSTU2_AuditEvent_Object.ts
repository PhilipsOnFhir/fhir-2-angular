import { DSTU2_AuditEvent_Detail } from './DSTU2_AuditEvent_Detail'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_AuditEvent_Object      extends DSTU2_BackboneElement
{

   static def : string = 'AuditEvent_Object';
   identifier : DSTU2_Identifier ;
   reference : DSTU2_Reference ;
   type : DSTU2_Coding ;
   role : DSTU2_Coding ;
   lifecycle : DSTU2_Coding ;
   securityLabel : DSTU2_Coding [];
   name : string ;
   description : string ;
   query : string ;
   detail : DSTU2_AuditEvent_Detail [];
}

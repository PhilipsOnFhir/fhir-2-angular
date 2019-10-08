import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'

export class STU3_AuditEvent_Source      extends STU3_BackboneElement
{

   static def : string = 'AuditEvent_Source';
   site : string ;
   identifier : STU3_Identifier ;
   type : STU3_Coding [];
}

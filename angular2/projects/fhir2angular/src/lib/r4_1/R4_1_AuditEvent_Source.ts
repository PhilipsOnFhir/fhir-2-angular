import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_AuditEvent_Source      extends R4_1_BackboneElement
{

   static def : string = 'AuditEvent_Source';
   site : string ;
   observer : R4_1_Reference ;
   type : R4_1_Coding [];
}

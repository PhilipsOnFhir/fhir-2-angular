import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_AuditEvent_Source      extends R4_BackboneElement
{

   static def : string = 'AuditEvent_Source';
   site : string ;
   observer : R4_Reference ;
   type : R4_Coding [];
}

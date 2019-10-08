import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_AuditEvent_Source      extends R5_BackboneElement
{

   static def : string = 'AuditEvent_Source';
   site : string ;
   observer : R5_Reference ;
   type : R5_Coding [];
}

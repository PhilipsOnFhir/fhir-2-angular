import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_AuditEvent_Detail      extends R5_BackboneElement
{

   static def : string = 'AuditEvent_Detail';
   type : string ;
   valueString : string ;
   valueBase64Binary : string ;
}

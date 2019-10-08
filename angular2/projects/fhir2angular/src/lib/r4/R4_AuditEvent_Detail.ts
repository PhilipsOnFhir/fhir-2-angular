import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_AuditEvent_Detail      extends R4_BackboneElement
{

   static def : string = 'AuditEvent_Detail';
   type : string ;
   valueString : string ;
   valueBase64Binary : string ;
}

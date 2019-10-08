import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_AuditEvent_Detail      extends R4_1_BackboneElement
{

   static def : string = 'AuditEvent_Detail';
   type : string ;
   valueString : string ;
   valueBase64Binary : string ;
}

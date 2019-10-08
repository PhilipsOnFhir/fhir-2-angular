import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DocumentModeEnum } from './R4_1_DocumentModeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_CapabilityStatement_Document      extends R4_1_BackboneElement
{

   static def : string = 'CapabilityStatement_Document';
   mode : R4_1_DocumentModeEnum ;
   documentation : string ;
   profile : string ;
}

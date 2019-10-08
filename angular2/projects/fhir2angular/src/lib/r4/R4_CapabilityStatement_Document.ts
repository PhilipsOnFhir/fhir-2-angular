import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DocumentModeEnum } from './R4_DocumentModeEnum'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_CapabilityStatement_Document      extends R4_BackboneElement
{

   static def : string = 'CapabilityStatement_Document';
   mode : R4_DocumentModeEnum ;
   documentation : string ;
   profile : string ;
}

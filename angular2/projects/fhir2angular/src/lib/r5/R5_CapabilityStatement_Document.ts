import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DocumentModeEnum } from './R5_DocumentModeEnum'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_CapabilityStatement_Document      extends R5_BackboneElement
{

   static def : string = 'CapabilityStatement_Document';
   mode : R5_DocumentModeEnum ;
   documentation : string ;
   profile : string ;
}

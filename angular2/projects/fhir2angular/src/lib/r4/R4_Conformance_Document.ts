import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DocumentModeEnum } from './R4_DocumentModeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Conformance_Document      extends R4_BackboneElement
{

   static def : string = 'Conformance_Document';
   mode : R4_DocumentModeEnum ;
   documentation : string ;
   profile : R4_Reference ;
}

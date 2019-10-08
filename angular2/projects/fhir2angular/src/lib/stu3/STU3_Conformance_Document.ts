import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DocumentModeEnum } from './STU3_DocumentModeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Conformance_Document      extends STU3_BackboneElement
{

   static def : string = 'Conformance_Document';
   mode : STU3_DocumentModeEnum ;
   documentation : string ;
   profile : STU3_Reference ;
}

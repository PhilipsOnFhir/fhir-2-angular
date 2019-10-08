import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DocumentModeEnum } from './DSTU2_DocumentModeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Conformance_Document      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Document';
   mode : DSTU2_DocumentModeEnum ;
   documentation : string ;
   profile : DSTU2_Reference ;
}

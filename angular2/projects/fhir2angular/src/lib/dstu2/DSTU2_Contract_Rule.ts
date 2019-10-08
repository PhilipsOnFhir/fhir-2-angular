import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Contract_Rule      extends DSTU2_BackboneElement
{

   static def : string = 'Contract_Rule';
   contentAttachment : DSTU2_Attachment ;
   contentReference : DSTU2_Reference ;
}

import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_Friendly      extends R5_BackboneElement
{

   static def : string = 'Contract_Friendly';
   contentAttachment : R5_Attachment ;
   contentReference : R5_Reference ;
}

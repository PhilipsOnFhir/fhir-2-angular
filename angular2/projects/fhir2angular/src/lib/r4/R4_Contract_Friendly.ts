import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Contract_Friendly      extends R4_BackboneElement
{

   static def : string = 'Contract_Friendly';
   contentAttachment : R4_Attachment ;
   contentReference : R4_Reference ;
}

import { R5_Attachment } from './R5_Attachment'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Communication_Payload      extends R5_BackboneElement
{

   static def : string = 'Communication_Payload';
   contentString : string ;
   contentAttachment : R5_Attachment ;
   contentReference : R5_Reference ;
}

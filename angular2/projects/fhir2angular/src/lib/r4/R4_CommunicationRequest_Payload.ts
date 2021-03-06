import { R4_Attachment } from './R4_Attachment'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CommunicationRequest_Payload      extends R4_BackboneElement
{

   static def : string = 'CommunicationRequest_Payload';
   contentString : string ;
   contentAttachment : R4_Attachment ;
   contentReference : R4_Reference ;
}

import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CommunicationRequest_Payload      extends R4_1_BackboneElement
{

   static def : string = 'CommunicationRequest_Payload';
   contentString : string ;
   contentAttachment : R4_1_Attachment ;
   contentReference : R4_1_Reference ;
}

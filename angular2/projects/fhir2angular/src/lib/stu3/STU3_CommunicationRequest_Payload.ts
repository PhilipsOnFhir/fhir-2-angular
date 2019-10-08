import { STU3_Attachment } from './STU3_Attachment'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_CommunicationRequest_Payload      extends STU3_BackboneElement
{

   static def : string = 'CommunicationRequest_Payload';
   contentString : string ;
   contentAttachment : STU3_Attachment ;
   contentReference : STU3_Reference ;
}

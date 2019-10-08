import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class CommunicationRequest_Payload      extends BackboneElement
{

   static def : string = 'CommunicationRequest_Payload';
   contentAttachment : Attachment ;
   contentReference : Reference ;
   contentCodeableConcept : CodeableConcept ;
}

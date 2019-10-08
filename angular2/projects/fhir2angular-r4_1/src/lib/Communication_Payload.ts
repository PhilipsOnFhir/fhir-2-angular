import { Attachment } from './Attachment'
import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'

export class Communication_Payload      extends BackboneElement
{

   static def : string = 'Communication_Payload';
   contentAttachment : Attachment ;
   contentReference : Reference ;
   contentCodeableConcept : CodeableConcept ;
}

import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { CommunicationRequest_Payload } from './CommunicationRequest_Payload'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'

export class CommunicationRequest      extends DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : Identifier [];
   basedOn : Reference [];
   replaces : Reference [];
   groupIdentifier : Identifier ;
   status : RequestStatusEnum ;
   statusReason : CodeableConcept ;
   category : CodeableConcept [];
   priority : RequestPriorityEnum ;
   doNotPerform : boolean ;
   medium : CodeableConcept [];
   subject : Reference ;
   about : Reference [];
   encounter : Reference ;
   payload : CommunicationRequest_Payload [];
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   authoredOn : string ;
   requester : Reference ;
   recipient : Reference [];
   informationProvider : Reference [];
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   note : Annotation [];
}

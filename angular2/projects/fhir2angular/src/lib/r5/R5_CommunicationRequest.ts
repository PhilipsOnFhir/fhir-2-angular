import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CommunicationRequest_Payload } from './R5_CommunicationRequest_Payload'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_RequestStatusEnum } from './R5_RequestStatusEnum'

export class R5_CommunicationRequest      extends R5_DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   replaces : R5_Reference [];
   groupIdentifier : R5_Identifier ;
   status : R5_RequestStatusEnum ;
   statusReason : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   priority : R5_RequestPriorityEnum ;
   doNotPerform : boolean ;
   medium : R5_CodeableConcept [];
   subject : R5_Reference ;
   about : R5_Reference [];
   encounter : R5_Reference ;
   payload : R5_CommunicationRequest_Payload [];
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   authoredOn : string ;
   requester : R5_Reference ;
   recipient : R5_Reference [];
   sender : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   note : R5_Annotation [];
}

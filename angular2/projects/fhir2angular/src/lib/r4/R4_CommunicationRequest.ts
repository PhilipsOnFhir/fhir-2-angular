import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CommunicationRequest_Payload } from './R4_CommunicationRequest_Payload'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_RequestStatusEnum } from './R4_RequestStatusEnum'

export class R4_CommunicationRequest      extends R4_DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   replaces : R4_Reference [];
   groupIdentifier : R4_Identifier ;
   status : R4_RequestStatusEnum ;
   statusReason : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   priority : R4_RequestPriorityEnum ;
   doNotPerform : boolean ;
   medium : R4_CodeableConcept [];
   subject : R4_Reference ;
   about : R4_Reference [];
   encounter : R4_Reference ;
   payload : R4_CommunicationRequest_Payload [];
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   authoredOn : string ;
   requester : R4_Reference ;
   recipient : R4_Reference [];
   sender : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   note : R4_Annotation [];
}

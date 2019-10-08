import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CommunicationRequest_Payload } from './R4_1_CommunicationRequest_Payload'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_RequestStatusEnum } from './R4_1_RequestStatusEnum'

export class R4_1_CommunicationRequest      extends R4_1_DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   replaces : R4_1_Reference [];
   groupIdentifier : R4_1_Identifier ;
   status : R4_1_RequestStatusEnum ;
   statusReason : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   priority : R4_1_RequestPriorityEnum ;
   doNotPerform : boolean ;
   medium : R4_1_CodeableConcept [];
   subject : R4_1_Reference ;
   about : R4_1_Reference [];
   encounter : R4_1_Reference ;
   payload : R4_1_CommunicationRequest_Payload [];
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   authoredOn : string ;
   requester : R4_1_Reference ;
   recipient : R4_1_Reference [];
   sender : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   note : R4_1_Annotation [];
}

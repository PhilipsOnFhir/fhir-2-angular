import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_CommunicationRequest_Payload } from './STU3_CommunicationRequest_Payload'
import { STU3_CommunicationRequest_Requester } from './STU3_CommunicationRequest_Requester'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RequestPriorityEnum } from './STU3_RequestPriorityEnum'
import { STU3_RequestStatusEnum } from './STU3_RequestStatusEnum'

export class STU3_CommunicationRequest      extends STU3_DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : STU3_Identifier [];
   basedOn : STU3_Reference [];
   replaces : STU3_Reference [];
   groupIdentifier : STU3_Identifier ;
   status : STU3_RequestStatusEnum ;
   category : STU3_CodeableConcept [];
   priority : STU3_RequestPriorityEnum ;
   medium : STU3_CodeableConcept [];
   subject : STU3_Reference ;
   recipient : STU3_Reference [];
   topic : STU3_Reference [];
   context : STU3_Reference ;
   payload : STU3_CommunicationRequest_Payload [];
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   authoredOn : string ;
   sender : STU3_Reference ;
   requester : STU3_CommunicationRequest_Requester ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   note : STU3_Annotation [];
}

import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_CommunicationRequestStatusEnum } from './DSTU2_CommunicationRequestStatusEnum'
import { DSTU2_CommunicationRequest_Payload } from './DSTU2_CommunicationRequest_Payload'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_CommunicationRequest      extends DSTU2_DomainResource
{

   static def : string = 'CommunicationRequest';
   identifier : DSTU2_Identifier [];
   category : DSTU2_CodeableConcept ;
   sender : DSTU2_Reference ;
   recipient : DSTU2_Reference [];
   payload : DSTU2_CommunicationRequest_Payload [];
   medium : DSTU2_CodeableConcept [];
   requester : DSTU2_Reference ;
   status : DSTU2_CommunicationRequestStatusEnum ;
   encounter : DSTU2_Reference ;
   scheduledDateTime : string ;
   scheduledPeriod : DSTU2_Period ;
   reason : DSTU2_CodeableConcept [];
   requestedOn : string ;
   subject : DSTU2_Reference ;
   priority : DSTU2_CodeableConcept ;
}

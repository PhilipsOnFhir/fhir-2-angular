import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DeviceRequest_Requester } from './STU3_DeviceRequest_Requester'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RequestPriorityEnum } from './STU3_RequestPriorityEnum'
import { STU3_RequestStatusEnum } from './STU3_RequestStatusEnum'
import { STU3_Timing } from './STU3_Timing'

export class STU3_DeviceRequest      extends STU3_DomainResource
{

   static def : string = 'DeviceRequest';
   identifier : STU3_Identifier [];
   definition : STU3_Reference [];
   basedOn : STU3_Reference [];
   priorRequest : STU3_Reference [];
   groupIdentifier : STU3_Identifier ;
   status : STU3_RequestStatusEnum ;
   intent : STU3_CodeableConcept ;
   priority : STU3_RequestPriorityEnum ;
   codeReference : STU3_Reference ;
   codeCodeableConcept : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   context : STU3_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   occurrenceTiming : STU3_Timing ;
   authoredOn : string ;
   requester : STU3_DeviceRequest_Requester ;
   performerType : STU3_CodeableConcept ;
   performer : STU3_Reference ;
   reasonCode : STU3_CodeableConcept [];
   reasonReference : STU3_Reference [];
   supportingInfo : STU3_Reference [];
   note : STU3_Annotation [];
   relevantHistory : STU3_Reference [];
}

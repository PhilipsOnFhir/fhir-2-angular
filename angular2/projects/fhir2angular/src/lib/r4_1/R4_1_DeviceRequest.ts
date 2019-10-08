import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DeviceRequest_Parameter } from './R4_1_DeviceRequest_Parameter'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestIntentEnum } from './R4_1_RequestIntentEnum'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_RequestStatusEnum } from './R4_1_RequestStatusEnum'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_DeviceRequest      extends R4_1_DomainResource
{

   static def : string = 'DeviceRequest';
   identifier : R4_1_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_1_Reference [];
   priorRequest : R4_1_Reference [];
   groupIdentifier : R4_1_Identifier ;
   status : R4_1_RequestStatusEnum ;
   intent : R4_1_RequestIntentEnum ;
   priority : R4_1_RequestPriorityEnum ;
   codeReference : R4_1_Reference ;
   codeCodeableConcept : R4_1_CodeableConcept ;
   parameter : R4_1_DeviceRequest_Parameter [];
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   occurrenceTiming : R4_1_Timing ;
   authoredOn : string ;
   requester : R4_1_Reference ;
   performerType : R4_1_CodeableConcept ;
   performer : R4_1_Reference ;
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   insurance : R4_1_Reference [];
   supportingInfo : R4_1_Reference [];
   note : R4_1_Annotation [];
   relevantHistory : R4_1_Reference [];
}

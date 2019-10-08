import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DeviceRequest_Parameter } from './R4_DeviceRequest_Parameter'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RequestIntentEnum } from './R4_RequestIntentEnum'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_RequestStatusEnum } from './R4_RequestStatusEnum'
import { R4_Timing } from './R4_Timing'

export class R4_DeviceRequest      extends R4_DomainResource
{

   static def : string = 'DeviceRequest';
   identifier : R4_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R4_Reference [];
   priorRequest : R4_Reference [];
   groupIdentifier : R4_Identifier ;
   status : R4_RequestStatusEnum ;
   intent : R4_RequestIntentEnum ;
   priority : R4_RequestPriorityEnum ;
   codeReference : R4_Reference ;
   codeCodeableConcept : R4_CodeableConcept ;
   parameter : R4_DeviceRequest_Parameter [];
   subject : R4_Reference ;
   encounter : R4_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   occurrenceTiming : R4_Timing ;
   authoredOn : string ;
   requester : R4_Reference ;
   performerType : R4_CodeableConcept ;
   performer : R4_Reference ;
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   insurance : R4_Reference [];
   supportingInfo : R4_Reference [];
   note : R4_Annotation [];
   relevantHistory : R4_Reference [];
}

import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DeviceRequest_Parameter } from './R5_DeviceRequest_Parameter'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RequestIntentEnum } from './R5_RequestIntentEnum'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_RequestStatusEnum } from './R5_RequestStatusEnum'
import { R5_Timing } from './R5_Timing'

export class R5_DeviceRequest      extends R5_DomainResource
{

   static def : string = 'DeviceRequest';
   identifier : R5_Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : R5_Reference [];
   priorRequest : R5_Reference [];
   groupIdentifier : R5_Identifier ;
   status : R5_RequestStatusEnum ;
   intent : R5_RequestIntentEnum ;
   priority : R5_RequestPriorityEnum ;
   codeReference : R5_Reference ;
   codeCodeableConcept : R5_CodeableConcept ;
   parameter : R5_DeviceRequest_Parameter [];
   subject : R5_Reference ;
   encounter : R5_Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   occurrenceTiming : R5_Timing ;
   authoredOn : string ;
   requester : R5_Reference ;
   performerType : R5_CodeableConcept ;
   performer : R5_Reference ;
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   insurance : R5_Reference [];
   supportingInfo : R5_Reference [];
   note : R5_Annotation [];
   relevantHistory : R5_Reference [];
}

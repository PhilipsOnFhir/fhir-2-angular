import { Annotation } from './Annotation'
import { CodeableConcept } from './CodeableConcept'
import { DeviceRequest_Parameter } from './DeviceRequest_Parameter'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Period } from './Period'
import { Reference } from './Reference'
import { RequestIntentEnum } from './RequestIntentEnum'
import { RequestPriorityEnum } from './RequestPriorityEnum'
import { RequestStatusEnum } from './RequestStatusEnum'
import { Timing } from './Timing'

export class DeviceRequest      extends DomainResource
{

   static def : string = 'DeviceRequest';
   identifier : Identifier [];
   instantiatesCanonical : string [];
   instantiatesUri : string [];
   basedOn : Reference [];
   priorRequest : Reference [];
   groupIdentifier : Identifier ;
   status : RequestStatusEnum ;
   intent : RequestIntentEnum ;
   priority : RequestPriorityEnum ;
   codeReference : Reference ;
   codeCodeableConcept : CodeableConcept ;
   parameter : DeviceRequest_Parameter [];
   subject : Reference ;
   encounter : Reference ;
   occurrenceDateTime : string ;
   occurrencePeriod : Period ;
   occurrenceTiming : Timing ;
   authoredOn : string ;
   requester : Reference ;
   performerType : CodeableConcept ;
   performer : Reference ;
   reasonCode : CodeableConcept [];
   reasonReference : Reference [];
   insurance : Reference [];
   supportingInfo : Reference [];
   note : Annotation [];
   relevantHistory : Reference [];
}

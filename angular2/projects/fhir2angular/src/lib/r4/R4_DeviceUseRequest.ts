import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DeviceUseRequestPriorityEnum } from './R4_DeviceUseRequestPriorityEnum'
import { R4_DeviceUseRequestStatusEnum } from './R4_DeviceUseRequestStatusEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'

export class R4_DeviceUseRequest      extends R4_DomainResource
{

   static def : string = 'DeviceUseRequest';
   bodySiteCodeableConcept : R4_CodeableConcept ;
   bodySiteReference : R4_Reference ;
   status : R4_DeviceUseRequestStatusEnum ;
   device : R4_Reference ;
   encounter : R4_Reference ;
   identifier : R4_Identifier [];
   indication : R4_CodeableConcept [];
   notes : string [];
   prnReason : R4_CodeableConcept [];
   orderedOn : string ;
   recordedOn : string ;
   subject : R4_Reference ;
   timingTiming : R4_Timing ;
   timingPeriod : R4_Period ;
   timingDateTime : string ;
   priority : R4_DeviceUseRequestPriorityEnum ;
}

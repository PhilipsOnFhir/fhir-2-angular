import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DeviceUseRequestPriorityEnum } from './DSTU2_DeviceUseRequestPriorityEnum'
import { DSTU2_DeviceUseRequestStatusEnum } from './DSTU2_DeviceUseRequestStatusEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_Timing } from './DSTU2_Timing'

export class DSTU2_DeviceUseRequest      extends DSTU2_DomainResource
{

   static def : string = 'DeviceUseRequest';
   bodySiteCodeableConcept : DSTU2_CodeableConcept ;
   bodySiteReference : DSTU2_Reference ;
   status : DSTU2_DeviceUseRequestStatusEnum ;
   device : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   identifier : DSTU2_Identifier [];
   indication : DSTU2_CodeableConcept [];
   notes : string [];
   prnReason : DSTU2_CodeableConcept [];
   orderedOn : string ;
   recordedOn : string ;
   subject : DSTU2_Reference ;
   timingTiming : DSTU2_Timing ;
   timingPeriod : DSTU2_Period ;
   timingDateTime : string ;
   priority : DSTU2_DeviceUseRequestPriorityEnum ;
}

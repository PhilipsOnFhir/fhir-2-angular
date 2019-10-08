import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_SupplyRequestStatusEnum } from './R4_SupplyRequestStatusEnum'
import { R4_SupplyRequest_Parameter } from './R4_SupplyRequest_Parameter'
import { R4_Timing } from './R4_Timing'

export class R4_SupplyRequest      extends R4_DomainResource
{

   static def : string = 'SupplyRequest';
   identifier : R4_Identifier [];
   status : R4_SupplyRequestStatusEnum ;
   category : R4_CodeableConcept ;
   priority : R4_RequestPriorityEnum ;
   itemCodeableConcept : R4_CodeableConcept ;
   itemReference : R4_Reference ;
   quantity : R4_Quantity ;
   parameter : R4_SupplyRequest_Parameter [];
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   occurrenceTiming : R4_Timing ;
   authoredOn : string ;
   requester : R4_Reference ;
   supplier : R4_Reference [];
   reasonCode : R4_CodeableConcept [];
   reasonReference : R4_Reference [];
   deliverFrom : R4_Reference ;
   deliverTo : R4_Reference ;
}

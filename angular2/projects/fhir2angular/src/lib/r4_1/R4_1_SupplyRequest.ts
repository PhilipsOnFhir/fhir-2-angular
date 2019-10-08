import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_SupplyRequestStatusEnum } from './R4_1_SupplyRequestStatusEnum'
import { R4_1_SupplyRequest_Parameter } from './R4_1_SupplyRequest_Parameter'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_SupplyRequest      extends R4_1_DomainResource
{

   static def : string = 'SupplyRequest';
   identifier : R4_1_Identifier [];
   status : R4_1_SupplyRequestStatusEnum ;
   category : R4_1_CodeableConcept ;
   priority : R4_1_RequestPriorityEnum ;
   itemCodeableConcept : R4_1_CodeableConcept ;
   itemReference : R4_1_Reference ;
   quantity : R4_1_Quantity ;
   parameter : R4_1_SupplyRequest_Parameter [];
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   occurrenceTiming : R4_1_Timing ;
   authoredOn : string ;
   requester : R4_1_Reference ;
   supplier : R4_1_Reference [];
   reasonCode : R4_1_CodeableConcept [];
   reasonReference : R4_1_Reference [];
   deliverFrom : R4_1_Reference ;
   deliverTo : R4_1_Reference ;
}

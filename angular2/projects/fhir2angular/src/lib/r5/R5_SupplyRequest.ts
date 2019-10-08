import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_SupplyRequestStatusEnum } from './R5_SupplyRequestStatusEnum'
import { R5_SupplyRequest_Parameter } from './R5_SupplyRequest_Parameter'
import { R5_Timing } from './R5_Timing'

export class R5_SupplyRequest      extends R5_DomainResource
{

   static def : string = 'SupplyRequest';
   identifier : R5_Identifier [];
   status : R5_SupplyRequestStatusEnum ;
   category : R5_CodeableConcept ;
   priority : R5_RequestPriorityEnum ;
   itemCodeableConcept : R5_CodeableConcept ;
   itemReference : R5_Reference ;
   quantity : R5_Quantity ;
   parameter : R5_SupplyRequest_Parameter [];
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   occurrenceTiming : R5_Timing ;
   authoredOn : string ;
   requester : R5_Reference ;
   supplier : R5_Reference [];
   reasonCode : R5_CodeableConcept [];
   reasonReference : R5_Reference [];
   deliverFrom : R5_Reference ;
   deliverTo : R5_Reference ;
}

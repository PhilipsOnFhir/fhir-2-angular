import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RequestPriorityEnum } from './STU3_RequestPriorityEnum'
import { STU3_SupplyRequestStatusEnum } from './STU3_SupplyRequestStatusEnum'
import { STU3_SupplyRequest_OrderedItem } from './STU3_SupplyRequest_OrderedItem'
import { STU3_SupplyRequest_Requester } from './STU3_SupplyRequest_Requester'
import { STU3_Timing } from './STU3_Timing'

export class STU3_SupplyRequest      extends STU3_DomainResource
{

   static def : string = 'SupplyRequest';
   identifier : STU3_Identifier ;
   status : STU3_SupplyRequestStatusEnum ;
   category : STU3_CodeableConcept ;
   priority : STU3_RequestPriorityEnum ;
   orderedItem : STU3_SupplyRequest_OrderedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   occurrenceTiming : STU3_Timing ;
   authoredOn : string ;
   requester : STU3_SupplyRequest_Requester ;
   supplier : STU3_Reference [];
   reasonCodeableConcept : STU3_CodeableConcept ;
   reasonReference : STU3_Reference ;
   deliverFrom : STU3_Reference ;
   deliverTo : STU3_Reference ;
}

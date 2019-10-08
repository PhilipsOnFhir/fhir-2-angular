import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_SupplyDeliveryStatusEnum } from './STU3_SupplyDeliveryStatusEnum'
import { STU3_SupplyDelivery_SuppliedItem } from './STU3_SupplyDelivery_SuppliedItem'
import { STU3_Timing } from './STU3_Timing'

export class STU3_SupplyDelivery      extends STU3_DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : STU3_Identifier ;
   basedOn : STU3_Reference [];
   partOf : STU3_Reference [];
   status : STU3_SupplyDeliveryStatusEnum ;
   patient : STU3_Reference ;
   type : STU3_CodeableConcept ;
   suppliedItem : STU3_SupplyDelivery_SuppliedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : STU3_Period ;
   occurrenceTiming : STU3_Timing ;
   supplier : STU3_Reference ;
   destination : STU3_Reference ;
   receiver : STU3_Reference [];
}

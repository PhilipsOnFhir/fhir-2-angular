import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SupplyDeliveryStatusEnum } from './R4_1_SupplyDeliveryStatusEnum'
import { R4_1_SupplyDelivery_SuppliedItem } from './R4_1_SupplyDelivery_SuppliedItem'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_SupplyDelivery      extends R4_1_DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : R4_1_Identifier [];
   basedOn : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_SupplyDeliveryStatusEnum ;
   patient : R4_1_Reference ;
   type : R4_1_CodeableConcept ;
   suppliedItem : R4_1_SupplyDelivery_SuppliedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_1_Period ;
   occurrenceTiming : R4_1_Timing ;
   supplier : R4_1_Reference ;
   destination : R4_1_Reference ;
   receiver : R4_1_Reference [];
}

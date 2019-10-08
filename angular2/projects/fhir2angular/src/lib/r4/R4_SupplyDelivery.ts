import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_SupplyDeliveryStatusEnum } from './R4_SupplyDeliveryStatusEnum'
import { R4_SupplyDelivery_SuppliedItem } from './R4_SupplyDelivery_SuppliedItem'
import { R4_Timing } from './R4_Timing'

export class R4_SupplyDelivery      extends R4_DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : R4_Identifier [];
   basedOn : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_SupplyDeliveryStatusEnum ;
   patient : R4_Reference ;
   type : R4_CodeableConcept ;
   suppliedItem : R4_SupplyDelivery_SuppliedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : R4_Period ;
   occurrenceTiming : R4_Timing ;
   supplier : R4_Reference ;
   destination : R4_Reference ;
   receiver : R4_Reference [];
}

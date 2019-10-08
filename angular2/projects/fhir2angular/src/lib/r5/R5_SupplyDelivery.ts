import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_SupplyDeliveryStatusEnum } from './R5_SupplyDeliveryStatusEnum'
import { R5_SupplyDelivery_SuppliedItem } from './R5_SupplyDelivery_SuppliedItem'
import { R5_Timing } from './R5_Timing'

export class R5_SupplyDelivery      extends R5_DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : R5_Identifier [];
   basedOn : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_SupplyDeliveryStatusEnum ;
   patient : R5_Reference ;
   type : R5_CodeableConcept ;
   suppliedItem : R5_SupplyDelivery_SuppliedItem ;
   occurrenceDateTime : string ;
   occurrencePeriod : R5_Period ;
   occurrenceTiming : R5_Timing ;
   supplier : R5_Reference ;
   destination : R5_Reference ;
   receiver : R5_Reference [];
}

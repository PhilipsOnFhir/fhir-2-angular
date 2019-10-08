import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_SimpleQuantity } from './DSTU2_SimpleQuantity'
import { DSTU2_SupplyDeliveryStatusEnum } from './DSTU2_SupplyDeliveryStatusEnum'

export class DSTU2_SupplyDelivery      extends DSTU2_DomainResource
{

   static def : string = 'SupplyDelivery';
   identifier : DSTU2_Identifier ;
   status : DSTU2_SupplyDeliveryStatusEnum ;
   patient : DSTU2_Reference ;
   type : DSTU2_CodeableConcept ;
   quantity : DSTU2_SimpleQuantity ;
   suppliedItem : DSTU2_Reference ;
   supplier : DSTU2_Reference ;
   whenPrepared : DSTU2_Period ;
   time : string ;
   destination : DSTU2_Reference ;
   receiver : DSTU2_Reference [];
}

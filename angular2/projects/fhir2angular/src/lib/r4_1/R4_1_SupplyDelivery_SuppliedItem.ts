import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SupplyDelivery_SuppliedItem      extends R4_1_BackboneElement
{

   static def : string = 'SupplyDelivery_SuppliedItem';
   quantity : R4_1_Quantity ;
   itemCodeableConcept : R4_1_CodeableConcept ;
   itemReference : R4_1_Reference ;
}

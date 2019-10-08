import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'

export class STU3_SupplyDelivery_SuppliedItem      extends STU3_BackboneElement
{

   static def : string = 'SupplyDelivery_SuppliedItem';
   quantity : STU3_Quantity ;
   itemCodeableConcept : STU3_CodeableConcept ;
   itemReference : STU3_Reference ;
}

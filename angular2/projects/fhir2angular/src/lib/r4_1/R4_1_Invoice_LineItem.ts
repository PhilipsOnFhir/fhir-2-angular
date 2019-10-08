import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Invoice_PriceComponent } from './R4_1_Invoice_PriceComponent'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Invoice_LineItem      extends R4_1_BackboneElement
{

   static def : string = 'Invoice_LineItem';
   sequence : string ;
   chargeItemReference : R4_1_Reference ;
   chargeItemCodeableConcept : R4_1_CodeableConcept ;
   priceComponent : R4_1_Invoice_PriceComponent [];
}

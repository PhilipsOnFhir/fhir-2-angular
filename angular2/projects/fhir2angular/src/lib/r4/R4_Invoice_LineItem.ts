import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Invoice_PriceComponent } from './R4_Invoice_PriceComponent'
import { R4_Reference } from './R4_Reference'

export class R4_Invoice_LineItem      extends R4_BackboneElement
{

   static def : string = 'Invoice_LineItem';
   sequence : string ;
   chargeItemReference : R4_Reference ;
   chargeItemCodeableConcept : R4_CodeableConcept ;
   priceComponent : R4_Invoice_PriceComponent [];
}

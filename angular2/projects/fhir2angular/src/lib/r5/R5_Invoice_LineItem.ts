import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Invoice_PriceComponent } from './R5_Invoice_PriceComponent'
import { R5_Reference } from './R5_Reference'

export class R5_Invoice_LineItem      extends R5_BackboneElement
{

   static def : string = 'Invoice_LineItem';
   sequence : string ;
   chargeItemReference : R5_Reference ;
   chargeItemCodeableConcept : R5_CodeableConcept ;
   priceComponent : R5_Invoice_PriceComponent [];
}

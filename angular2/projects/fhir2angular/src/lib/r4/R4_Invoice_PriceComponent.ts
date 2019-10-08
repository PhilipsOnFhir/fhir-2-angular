import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_InvoicePriceComponentTypeEnum } from './R4_InvoicePriceComponentTypeEnum'
import { R4_Money } from './R4_Money'

export class R4_Invoice_PriceComponent      extends R4_BackboneElement
{

   static def : string = 'Invoice_PriceComponent';
   type : R4_InvoicePriceComponentTypeEnum ;
   code : R4_CodeableConcept ;
   factor : string ;
   amount : R4_Money ;
}

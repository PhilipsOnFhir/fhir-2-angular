import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_InvoicePriceComponentTypeEnum } from './R5_InvoicePriceComponentTypeEnum'
import { R5_Money } from './R5_Money'

export class R5_ChargeItemDefinition_PriceComponent      extends R5_BackboneElement
{

   static def : string = 'ChargeItemDefinition_PriceComponent';
   type : R5_InvoicePriceComponentTypeEnum ;
   code : R5_CodeableConcept ;
   factor : string ;
   amount : R5_Money ;
}

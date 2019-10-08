import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_InvoicePriceComponentTypeEnum } from './R4_1_InvoicePriceComponentTypeEnum'
import { R4_1_Money } from './R4_1_Money'

export class R4_1_ChargeItemDefinition_PriceComponent      extends R4_1_BackboneElement
{

   static def : string = 'ChargeItemDefinition_PriceComponent';
   type : R4_1_InvoicePriceComponentTypeEnum ;
   code : R4_1_CodeableConcept ;
   factor : string ;
   amount : R4_1_Money ;
}

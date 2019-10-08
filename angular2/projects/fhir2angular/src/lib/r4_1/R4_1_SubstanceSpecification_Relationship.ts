import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Ratio } from './R4_1_Ratio'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SubstanceSpecification_Relationship      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Relationship';
   substanceReference : R4_1_Reference ;
   substanceCodeableConcept : R4_1_CodeableConcept ;
   relationship : R4_1_CodeableConcept ;
   isDefining : boolean ;
   amountQuantity : R4_1_Quantity ;
   amountRange : R4_1_Range ;
   amountRatio : R4_1_Ratio ;
   amountString : string ;
   amountRatioLowLimit : R4_1_Ratio ;
   amountType : R4_1_CodeableConcept ;
   source : R4_1_Reference [];
}

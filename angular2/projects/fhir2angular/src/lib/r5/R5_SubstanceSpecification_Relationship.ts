import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Ratio } from './R5_Ratio'
import { R5_Reference } from './R5_Reference'

export class R5_SubstanceSpecification_Relationship      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Relationship';
   substanceReference : R5_Reference ;
   substanceCodeableConcept : R5_CodeableConcept ;
   relationship : R5_CodeableConcept ;
   isDefining : boolean ;
   amountQuantity : R5_Quantity ;
   amountRange : R5_Range ;
   amountRatio : R5_Ratio ;
   amountString : string ;
   amountRatioLowLimit : R5_Ratio ;
   amountType : R5_CodeableConcept ;
   source : R5_Reference [];
}

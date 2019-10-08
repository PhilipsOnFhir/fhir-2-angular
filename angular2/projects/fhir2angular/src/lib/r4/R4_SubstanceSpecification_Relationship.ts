import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Ratio } from './R4_Ratio'
import { R4_Reference } from './R4_Reference'

export class R4_SubstanceSpecification_Relationship      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Relationship';
   substanceReference : R4_Reference ;
   substanceCodeableConcept : R4_CodeableConcept ;
   relationship : R4_CodeableConcept ;
   isDefining : boolean ;
   amountQuantity : R4_Quantity ;
   amountRange : R4_Range ;
   amountRatio : R4_Ratio ;
   amountString : string ;
   amountRatioLowLimit : R4_Ratio ;
   amountType : R4_CodeableConcept ;
   source : R4_Reference [];
}

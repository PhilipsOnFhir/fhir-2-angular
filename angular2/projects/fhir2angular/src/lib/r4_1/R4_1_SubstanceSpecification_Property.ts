import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_SubstanceSpecification_Property      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Property';
   category : R4_1_CodeableConcept ;
   code : R4_1_CodeableConcept ;
   parameters : string ;
   definingSubstanceReference : R4_1_Reference ;
   definingSubstanceCodeableConcept : R4_1_CodeableConcept ;
   amountQuantity : R4_1_Quantity ;
   amountString : string ;
}

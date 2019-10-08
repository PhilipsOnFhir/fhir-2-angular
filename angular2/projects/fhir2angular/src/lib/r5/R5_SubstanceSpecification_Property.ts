import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_SubstanceSpecification_Property      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Property';
   category : R5_CodeableConcept ;
   code : R5_CodeableConcept ;
   parameters : string ;
   definingSubstanceReference : R5_Reference ;
   definingSubstanceCodeableConcept : R5_CodeableConcept ;
   amountQuantity : R5_Quantity ;
   amountString : string ;
}

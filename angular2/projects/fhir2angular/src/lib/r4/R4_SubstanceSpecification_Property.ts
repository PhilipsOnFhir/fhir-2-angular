import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_SubstanceSpecification_Property      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Property';
   category : R4_CodeableConcept ;
   code : R4_CodeableConcept ;
   parameters : string ;
   definingSubstanceReference : R4_Reference ;
   definingSubstanceCodeableConcept : R4_CodeableConcept ;
   amountQuantity : R4_Quantity ;
   amountString : string ;
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'

export class R4_SubstanceSpecification_Moiety      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Moiety';
   role : R4_CodeableConcept ;
   identifier : R4_Identifier ;
   name : string ;
   stereochemistry : R4_CodeableConcept ;
   opticalActivity : R4_CodeableConcept ;
   molecularFormula : string ;
   amountQuantity : R4_Quantity ;
   amountString : string ;
}

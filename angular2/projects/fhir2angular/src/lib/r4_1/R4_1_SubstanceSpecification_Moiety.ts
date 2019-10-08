import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_SubstanceSpecification_Moiety      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Moiety';
   role : R4_1_CodeableConcept ;
   identifier : R4_1_Identifier ;
   name : string ;
   stereochemistry : R4_1_CodeableConcept ;
   opticalActivity : R4_1_CodeableConcept ;
   molecularFormula : string ;
   amountQuantity : R4_1_Quantity ;
   amountString : string ;
}

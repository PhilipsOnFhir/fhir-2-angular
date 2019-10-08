import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'

export class R5_SubstanceSpecification_Moiety      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Moiety';
   role : R5_CodeableConcept ;
   identifier : R5_Identifier ;
   name : string ;
   stereochemistry : R5_CodeableConcept ;
   opticalActivity : R5_CodeableConcept ;
   molecularFormula : string ;
   amountQuantity : R5_Quantity ;
   amountString : string ;
}

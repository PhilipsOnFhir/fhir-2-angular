import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'

export class SubstanceDefinition_Moiety      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Moiety';
   role : CodeableConcept ;
   identifier : Identifier ;
   name : string ;
   stereochemistry : CodeableConcept ;
   opticalActivity : CodeableConcept ;
   molecularFormula : string ;
   amountQuantity : Quantity ;
   amountString : string ;
   amountType : CodeableConcept ;
}

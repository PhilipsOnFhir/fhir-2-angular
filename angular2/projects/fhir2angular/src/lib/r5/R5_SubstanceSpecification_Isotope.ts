import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'
import { R5_SubstanceSpecification_MolecularWeight } from './R5_SubstanceSpecification_MolecularWeight'

export class R5_SubstanceSpecification_Isotope      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Isotope';
   identifier : R5_Identifier ;
   name : R5_CodeableConcept ;
   substitution : R5_CodeableConcept ;
   halfLife : R5_Quantity ;
   molecularWeight : R5_SubstanceSpecification_MolecularWeight ;
}

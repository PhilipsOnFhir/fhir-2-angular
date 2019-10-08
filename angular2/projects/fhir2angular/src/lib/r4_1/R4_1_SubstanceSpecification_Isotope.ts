import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_SubstanceSpecification_MolecularWeight } from './R4_1_SubstanceSpecification_MolecularWeight'

export class R4_1_SubstanceSpecification_Isotope      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Isotope';
   identifier : R4_1_Identifier ;
   name : R4_1_CodeableConcept ;
   substitution : R4_1_CodeableConcept ;
   halfLife : R4_1_Quantity ;
   molecularWeight : R4_1_SubstanceSpecification_MolecularWeight ;
}

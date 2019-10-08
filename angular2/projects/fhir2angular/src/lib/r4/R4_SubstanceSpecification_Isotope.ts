import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'
import { R4_SubstanceSpecification_MolecularWeight } from './R4_SubstanceSpecification_MolecularWeight'

export class R4_SubstanceSpecification_Isotope      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Isotope';
   identifier : R4_Identifier ;
   name : R4_CodeableConcept ;
   substitution : R4_CodeableConcept ;
   halfLife : R4_Quantity ;
   molecularWeight : R4_SubstanceSpecification_MolecularWeight ;
}

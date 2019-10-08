import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_SubstanceSpecification_Isotope } from './R4_1_SubstanceSpecification_Isotope'
import { R4_1_SubstanceSpecification_MolecularWeight } from './R4_1_SubstanceSpecification_MolecularWeight'
import { R4_1_SubstanceSpecification_Representation } from './R4_1_SubstanceSpecification_Representation'

export class R4_1_SubstanceSpecification_Structure      extends R4_1_BackboneElement
{

   static def : string = 'SubstanceSpecification_Structure';
   stereochemistry : R4_1_CodeableConcept ;
   opticalActivity : R4_1_CodeableConcept ;
   molecularFormula : string ;
   molecularFormulaByMoiety : string ;
   isotope : R4_1_SubstanceSpecification_Isotope [];
   molecularWeight : R4_1_SubstanceSpecification_MolecularWeight ;
   source : R4_1_Reference [];
   representation : R4_1_SubstanceSpecification_Representation [];
}

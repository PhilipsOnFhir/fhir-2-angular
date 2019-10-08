import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'
import { R5_SubstanceSpecification_Isotope } from './R5_SubstanceSpecification_Isotope'
import { R5_SubstanceSpecification_MolecularWeight } from './R5_SubstanceSpecification_MolecularWeight'
import { R5_SubstanceSpecification_Representation } from './R5_SubstanceSpecification_Representation'

export class R5_SubstanceSpecification_Structure      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_Structure';
   stereochemistry : R5_CodeableConcept ;
   opticalActivity : R5_CodeableConcept ;
   molecularFormula : string ;
   molecularFormulaByMoiety : string ;
   isotope : R5_SubstanceSpecification_Isotope [];
   molecularWeight : R5_SubstanceSpecification_MolecularWeight ;
   source : R5_Reference [];
   representation : R5_SubstanceSpecification_Representation [];
}

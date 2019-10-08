import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'
import { R4_SubstanceSpecification_Isotope } from './R4_SubstanceSpecification_Isotope'
import { R4_SubstanceSpecification_MolecularWeight } from './R4_SubstanceSpecification_MolecularWeight'
import { R4_SubstanceSpecification_Representation } from './R4_SubstanceSpecification_Representation'

export class R4_SubstanceSpecification_Structure      extends R4_BackboneElement
{

   static def : string = 'SubstanceSpecification_Structure';
   stereochemistry : R4_CodeableConcept ;
   opticalActivity : R4_CodeableConcept ;
   molecularFormula : string ;
   molecularFormulaByMoiety : string ;
   isotope : R4_SubstanceSpecification_Isotope [];
   molecularWeight : R4_SubstanceSpecification_MolecularWeight ;
   source : R4_Reference [];
   representation : R4_SubstanceSpecification_Representation [];
}

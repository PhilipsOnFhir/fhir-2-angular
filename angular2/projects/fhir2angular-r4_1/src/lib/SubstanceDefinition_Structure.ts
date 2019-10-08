import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'
import { Reference } from './Reference'
import { SubstanceDefinition_Isotope } from './SubstanceDefinition_Isotope'
import { SubstanceDefinition_MolecularWeight } from './SubstanceDefinition_MolecularWeight'
import { SubstanceDefinition_Representation } from './SubstanceDefinition_Representation'

export class SubstanceDefinition_Structure      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Structure';
   stereochemistry : CodeableConcept ;
   opticalActivity : CodeableConcept ;
   molecularFormula : string ;
   molecularFormulaByMoiety : string ;
   isotope : SubstanceDefinition_Isotope [];
   molecularWeight : SubstanceDefinition_MolecularWeight ;
   sourceCoding : Coding [];
   sourceDocument : Reference [];
   representation : SubstanceDefinition_Representation [];
}

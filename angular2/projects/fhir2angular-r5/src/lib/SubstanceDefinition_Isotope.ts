import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Quantity } from './Quantity'
import { SubstanceDefinition_MolecularWeight } from './SubstanceDefinition_MolecularWeight'

export class SubstanceDefinition_Isotope      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_Isotope';
   identifier : Identifier ;
   name : CodeableConcept ;
   substitution : CodeableConcept ;
   halfLife : Quantity ;
   molecularWeight : SubstanceDefinition_MolecularWeight ;
}

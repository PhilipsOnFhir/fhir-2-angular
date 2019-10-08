import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Quantity } from './Quantity'

export class SubstanceDefinition_MolecularWeight      extends BackboneElement
{

   static def : string = 'SubstanceDefinition_MolecularWeight';
   method : CodeableConcept ;
   type : CodeableConcept ;
   amount : Quantity ;
}

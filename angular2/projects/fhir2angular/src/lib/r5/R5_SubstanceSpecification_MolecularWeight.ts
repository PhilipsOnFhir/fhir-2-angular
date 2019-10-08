import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'

export class R5_SubstanceSpecification_MolecularWeight      extends R5_BackboneElement
{

   static def : string = 'SubstanceSpecification_MolecularWeight';
   method : R5_CodeableConcept ;
   type : R5_CodeableConcept ;
   amount : R5_Quantity ;
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MolecularSequence_Inner } from './R5_MolecularSequence_Inner'
import { R5_MolecularSequence_Outer } from './R5_MolecularSequence_Outer'

export class R5_MolecularSequence_StructureVariant      extends R5_BackboneElement
{

   static def : string = 'MolecularSequence_StructureVariant';
   variantType : R5_CodeableConcept ;
   exact : boolean ;
   length : string ;
   outer : R5_MolecularSequence_Outer ;
   inner : R5_MolecularSequence_Inner ;
}

import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MolecularSequence_Inner } from './R4_1_MolecularSequence_Inner'
import { R4_1_MolecularSequence_Outer } from './R4_1_MolecularSequence_Outer'

export class R4_1_MolecularSequence_StructureVariant      extends R4_1_BackboneElement
{

   static def : string = 'MolecularSequence_StructureVariant';
   variantType : R4_1_CodeableConcept ;
   exact : boolean ;
   length : string ;
   outer : R4_1_MolecularSequence_Outer ;
   inner : R4_1_MolecularSequence_Inner ;
}

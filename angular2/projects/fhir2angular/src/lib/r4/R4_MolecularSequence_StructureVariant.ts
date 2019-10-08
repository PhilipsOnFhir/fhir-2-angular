import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MolecularSequence_Inner } from './R4_MolecularSequence_Inner'
import { R4_MolecularSequence_Outer } from './R4_MolecularSequence_Outer'

export class R4_MolecularSequence_StructureVariant      extends R4_BackboneElement
{

   static def : string = 'MolecularSequence_StructureVariant';
   variantType : R4_CodeableConcept ;
   exact : boolean ;
   length : string ;
   outer : R4_MolecularSequence_Outer ;
   inner : R4_MolecularSequence_Inner ;
}

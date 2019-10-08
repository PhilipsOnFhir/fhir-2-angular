import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Sequence_Inner } from './R4_1_Sequence_Inner'
import { R4_1_Sequence_Outer } from './R4_1_Sequence_Outer'

export class R4_1_Sequence_StructureVariant      extends R4_1_BackboneElement
{

   static def : string = 'Sequence_StructureVariant';
   variantType : R4_1_CodeableConcept ;
   exact : boolean ;
   length : string ;
   outer : R4_1_Sequence_Outer ;
   inner : R4_1_Sequence_Inner ;
}

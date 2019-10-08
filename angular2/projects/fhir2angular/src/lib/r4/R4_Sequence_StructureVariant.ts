import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Sequence_Inner } from './R4_Sequence_Inner'
import { R4_Sequence_Outer } from './R4_Sequence_Outer'

export class R4_Sequence_StructureVariant      extends R4_BackboneElement
{

   static def : string = 'Sequence_StructureVariant';
   variantType : R4_CodeableConcept ;
   exact : boolean ;
   length : string ;
   outer : R4_Sequence_Outer ;
   inner : R4_Sequence_Inner ;
}

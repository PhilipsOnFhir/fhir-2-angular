import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Sequence_Inner } from './R5_Sequence_Inner'
import { R5_Sequence_Outer } from './R5_Sequence_Outer'

export class R5_Sequence_StructureVariant      extends R5_BackboneElement
{

   static def : string = 'Sequence_StructureVariant';
   variantType : R5_CodeableConcept ;
   exact : boolean ;
   length : string ;
   outer : R5_Sequence_Outer ;
   inner : R5_Sequence_Inner ;
}

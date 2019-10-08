import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MolecularSequence_ReferenceSeq      extends R4_1_BackboneElement
{

   static def : string = 'MolecularSequence_ReferenceSeq';
   chromosome : R4_1_CodeableConcept ;
   genomeBuild : string ;
   orientation : string ;
   referenceSeqId : R4_1_CodeableConcept ;
   referenceSeqPointer : R4_1_Reference ;
   referenceSeqString : string ;
   strand : string ;
   windowStart : string ;
   windowEnd : string ;
}

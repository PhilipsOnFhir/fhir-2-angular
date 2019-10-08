import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_MolecularSequence_ReferenceSeq      extends R4_BackboneElement
{

   static def : string = 'MolecularSequence_ReferenceSeq';
   chromosome : R4_CodeableConcept ;
   genomeBuild : string ;
   orientation : string ;
   referenceSeqId : R4_CodeableConcept ;
   referenceSeqPointer : R4_Reference ;
   referenceSeqString : string ;
   strand : string ;
   windowStart : string ;
   windowEnd : string ;
}

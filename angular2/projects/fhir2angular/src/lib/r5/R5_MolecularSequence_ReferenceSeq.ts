import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_MolecularSequence_ReferenceSeq      extends R5_BackboneElement
{

   static def : string = 'MolecularSequence_ReferenceSeq';
   chromosome : R5_CodeableConcept ;
   genomeBuild : string ;
   orientation : string ;
   referenceSeqId : R5_CodeableConcept ;
   referenceSeqPointer : R5_Reference ;
   referenceSeqString : string ;
   strand : string ;
   windowStart : string ;
   windowEnd : string ;
}

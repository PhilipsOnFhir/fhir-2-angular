import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Sequence_ReferenceSeq      extends STU3_BackboneElement
{

   static def : string = 'Sequence_ReferenceSeq';
   chromosome : STU3_CodeableConcept ;
   genomeBuild : string ;
   referenceSeqId : STU3_CodeableConcept ;
   referenceSeqPointer : STU3_Reference ;
   referenceSeqString : string ;
   strand : string ;
   windowStart : string ;
   windowEnd : string ;
}

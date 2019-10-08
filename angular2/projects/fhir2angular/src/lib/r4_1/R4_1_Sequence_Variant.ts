import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Sequence_Variant      extends R4_1_BackboneElement
{

   static def : string = 'Sequence_Variant';
   start : string ;
   end : string ;
   observedAllele : string ;
   referenceAllele : string ;
   cigar : string ;
   variantPointer : R4_1_Reference ;
}

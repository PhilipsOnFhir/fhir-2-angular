import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Sequence_Variant      extends STU3_BackboneElement
{

   static def : string = 'Sequence_Variant';
   start : string ;
   end : string ;
   observedAllele : string ;
   referenceAllele : string ;
   cigar : string ;
   variantPointer : STU3_Reference ;
}

import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Reference } from './STU3_Reference'
import { STU3_Sequence_Quality } from './STU3_Sequence_Quality'
import { STU3_Sequence_ReferenceSeq } from './STU3_Sequence_ReferenceSeq'
import { STU3_Sequence_Repository } from './STU3_Sequence_Repository'
import { STU3_Sequence_Variant } from './STU3_Sequence_Variant'

export class STU3_Sequence      extends STU3_DomainResource
{

   static def : string = 'Sequence';
   identifier : STU3_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : STU3_Reference ;
   specimen : STU3_Reference ;
   device : STU3_Reference ;
   performer : STU3_Reference ;
   quantity : STU3_Quantity ;
   referenceSeq : STU3_Sequence_ReferenceSeq ;
   variant : STU3_Sequence_Variant [];
   observedSeq : string ;
   quality : STU3_Sequence_Quality [];
   readCoverage : string ;
   repository : STU3_Sequence_Repository [];
   pointer : STU3_Reference [];
}

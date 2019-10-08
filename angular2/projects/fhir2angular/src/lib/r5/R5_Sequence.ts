import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'
import { R5_Sequence_Quality } from './R5_Sequence_Quality'
import { R5_Sequence_ReferenceSeq } from './R5_Sequence_ReferenceSeq'
import { R5_Sequence_Repository } from './R5_Sequence_Repository'
import { R5_Sequence_StructureVariant } from './R5_Sequence_StructureVariant'
import { R5_Sequence_Variant } from './R5_Sequence_Variant'

export class R5_Sequence      extends R5_DomainResource
{

   static def : string = 'Sequence';
   identifier : R5_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : R5_Reference ;
   specimen : R5_Reference ;
   device : R5_Reference ;
   performer : R5_Reference ;
   quantity : R5_Quantity ;
   referenceSeq : R5_Sequence_ReferenceSeq ;
   variant : R5_Sequence_Variant [];
   observedSeq : string ;
   quality : R5_Sequence_Quality [];
   readCoverage : string ;
   repository : R5_Sequence_Repository [];
   pointer : R5_Reference [];
   structureVariant : R5_Sequence_StructureVariant [];
}

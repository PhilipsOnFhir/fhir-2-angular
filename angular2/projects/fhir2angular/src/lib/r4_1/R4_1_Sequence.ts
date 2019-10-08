import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Sequence_Quality } from './R4_1_Sequence_Quality'
import { R4_1_Sequence_ReferenceSeq } from './R4_1_Sequence_ReferenceSeq'
import { R4_1_Sequence_Repository } from './R4_1_Sequence_Repository'
import { R4_1_Sequence_StructureVariant } from './R4_1_Sequence_StructureVariant'
import { R4_1_Sequence_Variant } from './R4_1_Sequence_Variant'

export class R4_1_Sequence      extends R4_1_DomainResource
{

   static def : string = 'Sequence';
   identifier : R4_1_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : R4_1_Reference ;
   specimen : R4_1_Reference ;
   device : R4_1_Reference ;
   performer : R4_1_Reference ;
   quantity : R4_1_Quantity ;
   referenceSeq : R4_1_Sequence_ReferenceSeq ;
   variant : R4_1_Sequence_Variant [];
   observedSeq : string ;
   quality : R4_1_Sequence_Quality [];
   readCoverage : string ;
   repository : R4_1_Sequence_Repository [];
   pointer : R4_1_Reference [];
   structureVariant : R4_1_Sequence_StructureVariant [];
}

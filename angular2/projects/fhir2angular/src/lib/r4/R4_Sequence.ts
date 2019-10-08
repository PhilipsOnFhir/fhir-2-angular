import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'
import { R4_Sequence_Quality } from './R4_Sequence_Quality'
import { R4_Sequence_ReferenceSeq } from './R4_Sequence_ReferenceSeq'
import { R4_Sequence_Repository } from './R4_Sequence_Repository'
import { R4_Sequence_StructureVariant } from './R4_Sequence_StructureVariant'
import { R4_Sequence_Variant } from './R4_Sequence_Variant'

export class R4_Sequence      extends R4_DomainResource
{

   static def : string = 'Sequence';
   identifier : R4_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : R4_Reference ;
   specimen : R4_Reference ;
   device : R4_Reference ;
   performer : R4_Reference ;
   quantity : R4_Quantity ;
   referenceSeq : R4_Sequence_ReferenceSeq ;
   variant : R4_Sequence_Variant [];
   observedSeq : string ;
   quality : R4_Sequence_Quality [];
   readCoverage : string ;
   repository : R4_Sequence_Repository [];
   pointer : R4_Reference [];
   structureVariant : R4_Sequence_StructureVariant [];
}

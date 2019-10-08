import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_MolecularSequence_Quality } from './R4_1_MolecularSequence_Quality'
import { R4_1_MolecularSequence_ReferenceSeq } from './R4_1_MolecularSequence_ReferenceSeq'
import { R4_1_MolecularSequence_Repository } from './R4_1_MolecularSequence_Repository'
import { R4_1_MolecularSequence_StructureVariant } from './R4_1_MolecularSequence_StructureVariant'
import { R4_1_MolecularSequence_Variant } from './R4_1_MolecularSequence_Variant'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MolecularSequence      extends R4_1_DomainResource
{

   static def : string = 'MolecularSequence';
   identifier : R4_1_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : R4_1_Reference ;
   specimen : R4_1_Reference ;
   device : R4_1_Reference ;
   performer : R4_1_Reference ;
   quantity : R4_1_Quantity ;
   referenceSeq : R4_1_MolecularSequence_ReferenceSeq ;
   variant : R4_1_MolecularSequence_Variant [];
   observedSeq : string ;
   quality : R4_1_MolecularSequence_Quality [];
   readCoverage : string ;
   repository : R4_1_MolecularSequence_Repository [];
   pointer : R4_1_Reference [];
   structureVariant : R4_1_MolecularSequence_StructureVariant [];
}

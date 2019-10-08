import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_MolecularSequence_Quality } from './R5_MolecularSequence_Quality'
import { R5_MolecularSequence_ReferenceSeq } from './R5_MolecularSequence_ReferenceSeq'
import { R5_MolecularSequence_Repository } from './R5_MolecularSequence_Repository'
import { R5_MolecularSequence_StructureVariant } from './R5_MolecularSequence_StructureVariant'
import { R5_MolecularSequence_Variant } from './R5_MolecularSequence_Variant'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MolecularSequence      extends R5_DomainResource
{

   static def : string = 'MolecularSequence';
   identifier : R5_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : R5_Reference ;
   specimen : R5_Reference ;
   device : R5_Reference ;
   performer : R5_Reference ;
   quantity : R5_Quantity ;
   referenceSeq : R5_MolecularSequence_ReferenceSeq ;
   variant : R5_MolecularSequence_Variant [];
   observedSeq : string ;
   quality : R5_MolecularSequence_Quality [];
   readCoverage : string ;
   repository : R5_MolecularSequence_Repository [];
   pointer : R5_Reference [];
   structureVariant : R5_MolecularSequence_StructureVariant [];
}

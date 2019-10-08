import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_MolecularSequence_Quality } from './R4_MolecularSequence_Quality'
import { R4_MolecularSequence_ReferenceSeq } from './R4_MolecularSequence_ReferenceSeq'
import { R4_MolecularSequence_Repository } from './R4_MolecularSequence_Repository'
import { R4_MolecularSequence_StructureVariant } from './R4_MolecularSequence_StructureVariant'
import { R4_MolecularSequence_Variant } from './R4_MolecularSequence_Variant'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MolecularSequence      extends R4_DomainResource
{

   static def : string = 'MolecularSequence';
   identifier : R4_Identifier [];
   type : string ;
   coordinateSystem : string ;
   patient : R4_Reference ;
   specimen : R4_Reference ;
   device : R4_Reference ;
   performer : R4_Reference ;
   quantity : R4_Quantity ;
   referenceSeq : R4_MolecularSequence_ReferenceSeq ;
   variant : R4_MolecularSequence_Variant [];
   observedSeq : string ;
   quality : R4_MolecularSequence_Quality [];
   readCoverage : string ;
   repository : R4_MolecularSequence_Repository [];
   pointer : R4_Reference [];
   structureVariant : R4_MolecularSequence_StructureVariant [];
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MolecularSequence_Roc      extends R5_BackboneElement
{

   static def : string = 'MolecularSequence_Roc';
   score : string [];
   numTP : string [];
   numFP : string [];
   numFN : string [];
   precision : string [];
   sensitivity : string [];
   fMeasure : string [];
}

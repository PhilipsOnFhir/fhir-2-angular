import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MolecularSequence_Roc      extends R4_BackboneElement
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

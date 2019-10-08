import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MolecularSequence_Roc } from './R5_MolecularSequence_Roc'
import { R5_Quantity } from './R5_Quantity'

export class R5_MolecularSequence_Quality      extends R5_BackboneElement
{

   static def : string = 'MolecularSequence_Quality';
   type : string ;
   standardSequence : R5_CodeableConcept ;
   start : string ;
   end : string ;
   score : R5_Quantity ;
   method : R5_CodeableConcept ;
   truthTP : string ;
   queryTP : string ;
   truthFN : string ;
   queryFP : string ;
   gtFP : string ;
   precision : string ;
   recall : string ;
   fScore : string ;
   roc : R5_MolecularSequence_Roc ;
}

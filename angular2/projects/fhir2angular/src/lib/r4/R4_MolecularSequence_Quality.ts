import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MolecularSequence_Roc } from './R4_MolecularSequence_Roc'
import { R4_Quantity } from './R4_Quantity'

export class R4_MolecularSequence_Quality      extends R4_BackboneElement
{

   static def : string = 'MolecularSequence_Quality';
   type : string ;
   standardSequence : R4_CodeableConcept ;
   start : string ;
   end : string ;
   score : R4_Quantity ;
   method : R4_CodeableConcept ;
   truthTP : string ;
   queryTP : string ;
   truthFN : string ;
   queryFP : string ;
   gtFP : string ;
   precision : string ;
   recall : string ;
   fScore : string ;
   roc : R4_MolecularSequence_Roc ;
}

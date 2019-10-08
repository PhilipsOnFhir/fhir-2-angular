import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Sequence_Roc } from './R4_1_Sequence_Roc'

export class R4_1_Sequence_Quality      extends R4_1_BackboneElement
{

   static def : string = 'Sequence_Quality';
   type : string ;
   standardSequence : R4_1_CodeableConcept ;
   start : string ;
   end : string ;
   score : R4_1_Quantity ;
   method : R4_1_CodeableConcept ;
   truthTP : string ;
   queryTP : string ;
   truthFN : string ;
   queryFP : string ;
   gtFP : string ;
   precision : string ;
   recall : string ;
   fScore : string ;
   roc : R4_1_Sequence_Roc ;
}

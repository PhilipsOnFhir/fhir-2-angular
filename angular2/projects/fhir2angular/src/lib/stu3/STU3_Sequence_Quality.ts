import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'

export class STU3_Sequence_Quality      extends STU3_BackboneElement
{

   static def : string = 'Sequence_Quality';
   type : string ;
   standardSequence : STU3_CodeableConcept ;
   start : string ;
   end : string ;
   score : STU3_Quantity ;
   method : STU3_CodeableConcept ;
   truthTP : string ;
   queryTP : string ;
   truthFN : string ;
   queryFP : string ;
   gtFP : string ;
   precision : string ;
   recall : string ;
   fScore : string ;
}

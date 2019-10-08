import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ListModeEnum } from './R4_1_ListModeEnum'
import { R4_1_Narrative } from './R4_1_Narrative'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Composition_Section      extends R4_1_BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : R4_1_CodeableConcept ;
   author : R4_1_Reference [];
   focus : R4_1_Reference ;
   text : R4_1_Narrative ;
   mode : R4_1_ListModeEnum ;
   orderedBy : R4_1_CodeableConcept ;
   entry : R4_1_Reference [];
   emptyReason : R4_1_CodeableConcept ;
   section : R4_1_Composition_Section [];
}

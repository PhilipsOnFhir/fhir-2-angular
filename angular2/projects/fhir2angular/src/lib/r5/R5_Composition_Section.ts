import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ListModeEnum } from './R5_ListModeEnum'
import { R5_Narrative } from './R5_Narrative'
import { R5_Reference } from './R5_Reference'

export class R5_Composition_Section      extends R5_BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : R5_CodeableConcept ;
   author : R5_Reference [];
   focus : R5_Reference ;
   text : R5_Narrative ;
   mode : R5_ListModeEnum ;
   orderedBy : R5_CodeableConcept ;
   entry : R5_Reference [];
   emptyReason : R5_CodeableConcept ;
   section : R5_Composition_Section [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ListModeEnum } from './R4_ListModeEnum'
import { R4_Narrative } from './R4_Narrative'
import { R4_Reference } from './R4_Reference'

export class R4_Composition_Section      extends R4_BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : R4_CodeableConcept ;
   author : R4_Reference [];
   focus : R4_Reference ;
   text : R4_Narrative ;
   mode : R4_ListModeEnum ;
   orderedBy : R4_CodeableConcept ;
   entry : R4_Reference [];
   emptyReason : R4_CodeableConcept ;
   section : R4_Composition_Section [];
}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ListModeEnum } from './STU3_ListModeEnum'
import { STU3_Narrative } from './STU3_Narrative'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Composition_Section      extends STU3_BackboneElement
{

   static def : string = 'Composition_Section';
   title : string ;
   code : STU3_CodeableConcept ;
   text : STU3_Narrative ;
   mode : STU3_ListModeEnum ;
   orderedBy : STU3_CodeableConcept ;
   entry : STU3_Reference [];
   emptyReason : STU3_CodeableConcept ;
   section : STU3_Composition_Section [];
}

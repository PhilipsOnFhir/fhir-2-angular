import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_List_Entry      extends R4_1_BackboneElement
{

   static def : string = 'List_Entry';
   flag : R4_1_CodeableConcept ;
   deleted : boolean ;
   date : string ;
   item : R4_1_Reference ;
}

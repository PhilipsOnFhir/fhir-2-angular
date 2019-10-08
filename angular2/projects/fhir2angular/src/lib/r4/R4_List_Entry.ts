import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_List_Entry      extends R4_BackboneElement
{

   static def : string = 'List_Entry';
   flag : R4_CodeableConcept ;
   deleted : boolean ;
   date : string ;
   item : R4_Reference ;
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_List_Entry      extends R5_BackboneElement
{

   static def : string = 'List_Entry';
   flag : R5_CodeableConcept ;
   deleted : boolean ;
   date : string ;
   item : R5_Reference ;
}

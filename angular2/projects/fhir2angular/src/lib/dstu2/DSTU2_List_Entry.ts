import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_List_Entry      extends DSTU2_BackboneElement
{

   static def : string = 'List_Entry';
   flag : DSTU2_CodeableConcept ;
   deleted : boolean ;
   date : string ;
   item : DSTU2_Reference ;
}

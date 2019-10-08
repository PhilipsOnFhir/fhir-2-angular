import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ListModeEnum } from './R5_ListModeEnum'
import { R5_ListStatusEnum } from './R5_ListStatusEnum'
import { R5_List_Entry } from './R5_List_Entry'
import { R5_Reference } from './R5_Reference'

export class R5_List      extends R5_DomainResource
{

   static def : string = 'List';
   identifier : R5_Identifier [];
   status : R5_ListStatusEnum ;
   mode : R5_ListModeEnum ;
   title : string ;
   code : R5_CodeableConcept ;
   subject : R5_Reference ;
   encounter : R5_Reference ;
   date : string ;
   source : R5_Reference ;
   orderedBy : R5_CodeableConcept ;
   note : R5_Annotation [];
   entry : R5_List_Entry [];
   emptyReason : R5_CodeableConcept ;
}

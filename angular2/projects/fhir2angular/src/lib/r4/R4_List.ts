import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ListModeEnum } from './R4_ListModeEnum'
import { R4_ListStatusEnum } from './R4_ListStatusEnum'
import { R4_List_Entry } from './R4_List_Entry'
import { R4_Reference } from './R4_Reference'

export class R4_List      extends R4_DomainResource
{

   static def : string = 'List';
   identifier : R4_Identifier [];
   status : R4_ListStatusEnum ;
   mode : R4_ListModeEnum ;
   title : string ;
   code : R4_CodeableConcept ;
   subject : R4_Reference ;
   encounter : R4_Reference ;
   date : string ;
   source : R4_Reference ;
   orderedBy : R4_CodeableConcept ;
   note : R4_Annotation [];
   entry : R4_List_Entry [];
   emptyReason : R4_CodeableConcept ;
}

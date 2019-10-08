import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ListModeEnum } from './R4_1_ListModeEnum'
import { R4_1_ListStatusEnum } from './R4_1_ListStatusEnum'
import { R4_1_List_Entry } from './R4_1_List_Entry'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_List      extends R4_1_DomainResource
{

   static def : string = 'List';
   identifier : R4_1_Identifier [];
   status : R4_1_ListStatusEnum ;
   mode : R4_1_ListModeEnum ;
   title : string ;
   code : R4_1_CodeableConcept ;
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   date : string ;
   source : R4_1_Reference ;
   orderedBy : R4_1_CodeableConcept ;
   note : R4_1_Annotation [];
   entry : R4_1_List_Entry [];
   emptyReason : R4_1_CodeableConcept ;
}

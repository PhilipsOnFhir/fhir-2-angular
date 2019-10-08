import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ListModeEnum } from './STU3_ListModeEnum'
import { STU3_ListStatusEnum } from './STU3_ListStatusEnum'
import { STU3_List_Entry } from './STU3_List_Entry'
import { STU3_Reference } from './STU3_Reference'

export class STU3_List      extends STU3_DomainResource
{

   static def : string = 'List';
   identifier : STU3_Identifier [];
   status : STU3_ListStatusEnum ;
   mode : STU3_ListModeEnum ;
   title : string ;
   code : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   encounter : STU3_Reference ;
   date : string ;
   source : STU3_Reference ;
   orderedBy : STU3_CodeableConcept ;
   note : STU3_Annotation [];
   entry : STU3_List_Entry [];
   emptyReason : STU3_CodeableConcept ;
}

import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ListModeEnum } from './DSTU2_ListModeEnum'
import { DSTU2_ListStatusEnum } from './DSTU2_ListStatusEnum'
import { DSTU2_List_Entry } from './DSTU2_List_Entry'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_List      extends DSTU2_DomainResource
{

   static def : string = 'List';
   identifier : DSTU2_Identifier [];
   title : string ;
   code : DSTU2_CodeableConcept ;
   subject : DSTU2_Reference ;
   source : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   status : DSTU2_ListStatusEnum ;
   date : string ;
   orderedBy : DSTU2_CodeableConcept ;
   mode : DSTU2_ListModeEnum ;
   note : string ;
   entry : DSTU2_List_Entry [];
   emptyReason : DSTU2_CodeableConcept ;
}

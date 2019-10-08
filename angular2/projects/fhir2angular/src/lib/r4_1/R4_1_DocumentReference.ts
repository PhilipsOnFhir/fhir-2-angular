import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_CompositionStatusEnum } from './R4_1_CompositionStatusEnum'
import { R4_1_DocumentReferenceStatusEnum } from './R4_1_DocumentReferenceStatusEnum'
import { R4_1_DocumentReference_Content } from './R4_1_DocumentReference_Content'
import { R4_1_DocumentReference_Context } from './R4_1_DocumentReference_Context'
import { R4_1_DocumentReference_RelatesTo } from './R4_1_DocumentReference_RelatesTo'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_DocumentReference      extends R4_1_DomainResource
{

   static def : string = 'DocumentReference';
   masterIdentifier : R4_1_Identifier ;
   identifier : R4_1_Identifier [];
   status : R4_1_DocumentReferenceStatusEnum ;
   docStatus : R4_1_CompositionStatusEnum ;
   type : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   subject : R4_1_Reference ;
   date : string ;
   author : R4_1_Reference [];
   authenticator : R4_1_Reference ;
   custodian : R4_1_Reference ;
   relatesTo : R4_1_DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : R4_1_CodeableConcept [];
   content : R4_1_DocumentReference_Content [];
   context : R4_1_DocumentReference_Context ;
}

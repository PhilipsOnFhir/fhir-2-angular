import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_CompositionStatusEnum } from './R5_CompositionStatusEnum'
import { R5_DocumentReferenceStatusEnum } from './R5_DocumentReferenceStatusEnum'
import { R5_DocumentReference_Content } from './R5_DocumentReference_Content'
import { R5_DocumentReference_Context } from './R5_DocumentReference_Context'
import { R5_DocumentReference_RelatesTo } from './R5_DocumentReference_RelatesTo'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_DocumentReference      extends R5_DomainResource
{

   static def : string = 'DocumentReference';
   masterIdentifier : R5_Identifier ;
   identifier : R5_Identifier [];
   status : R5_DocumentReferenceStatusEnum ;
   docStatus : R5_CompositionStatusEnum ;
   type : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   subject : R5_Reference ;
   date : string ;
   author : R5_Reference [];
   authenticator : R5_Reference ;
   custodian : R5_Reference ;
   relatesTo : R5_DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : R5_CodeableConcept [];
   content : R5_DocumentReference_Content [];
   context : R5_DocumentReference_Context ;
}

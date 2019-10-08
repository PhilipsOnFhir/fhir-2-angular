import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_CompositionStatusEnum } from './R4_CompositionStatusEnum'
import { R4_DocumentReferenceStatusEnum } from './R4_DocumentReferenceStatusEnum'
import { R4_DocumentReference_Content } from './R4_DocumentReference_Content'
import { R4_DocumentReference_Context } from './R4_DocumentReference_Context'
import { R4_DocumentReference_RelatesTo } from './R4_DocumentReference_RelatesTo'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_DocumentReference      extends R4_DomainResource
{

   static def : string = 'DocumentReference';
   masterIdentifier : R4_Identifier ;
   identifier : R4_Identifier [];
   status : R4_DocumentReferenceStatusEnum ;
   docStatus : R4_CompositionStatusEnum ;
   type : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   subject : R4_Reference ;
   date : string ;
   author : R4_Reference [];
   authenticator : R4_Reference ;
   custodian : R4_Reference ;
   relatesTo : R4_DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : R4_CodeableConcept [];
   content : R4_DocumentReference_Content [];
   context : R4_DocumentReference_Context ;
}

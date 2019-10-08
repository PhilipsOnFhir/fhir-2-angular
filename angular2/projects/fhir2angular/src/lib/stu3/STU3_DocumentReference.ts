import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_CompositionStatusEnum } from './STU3_CompositionStatusEnum'
import { STU3_DocumentReferenceStatusEnum } from './STU3_DocumentReferenceStatusEnum'
import { STU3_DocumentReference_Content } from './STU3_DocumentReference_Content'
import { STU3_DocumentReference_Context } from './STU3_DocumentReference_Context'
import { STU3_DocumentReference_RelatesTo } from './STU3_DocumentReference_RelatesTo'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_DocumentReference      extends STU3_DomainResource
{

   static def : string = 'DocumentReference';
   masterIdentifier : STU3_Identifier ;
   identifier : STU3_Identifier [];
   status : STU3_DocumentReferenceStatusEnum ;
   docStatus : STU3_CompositionStatusEnum ;
   type : STU3_CodeableConcept ;
   class : STU3_CodeableConcept ;
   subject : STU3_Reference ;
   created : string ;
   indexed : string ;
   author : STU3_Reference [];
   authenticator : STU3_Reference ;
   custodian : STU3_Reference ;
   relatesTo : STU3_DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : STU3_CodeableConcept [];
   content : STU3_DocumentReference_Content [];
   context : STU3_DocumentReference_Context ;
}

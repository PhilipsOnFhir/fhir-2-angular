import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DocumentReference_Content } from './DSTU2_DocumentReference_Content'
import { DSTU2_DocumentReference_Context } from './DSTU2_DocumentReference_Context'
import { DSTU2_DocumentReference_RelatesTo } from './DSTU2_DocumentReference_RelatesTo'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_DocumentReference      extends DSTU2_DomainResource
{

   static def : string = 'DocumentReference';
   masterIdentifier : DSTU2_Identifier ;
   identifier : DSTU2_Identifier [];
   subject : DSTU2_Reference ;
   type : DSTU2_CodeableConcept ;
   class : DSTU2_CodeableConcept ;
   author : DSTU2_Reference [];
   custodian : DSTU2_Reference ;
   authenticator : DSTU2_Reference ;
   created : string ;
   indexed : string ;
   status : string ;
   docStatus : DSTU2_CodeableConcept ;
   relatesTo : DSTU2_DocumentReference_RelatesTo [];
   description : string ;
   securityLabel : DSTU2_CodeableConcept [];
   content : DSTU2_DocumentReference_Content [];
   context : DSTU2_DocumentReference_Context ;
}

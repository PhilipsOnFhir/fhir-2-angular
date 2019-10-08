import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ConsentStateEnum } from './R4_1_ConsentStateEnum'
import { R4_1_Consent_Policy } from './R4_1_Consent_Policy'
import { R4_1_Consent_Provision } from './R4_1_Consent_Provision'
import { R4_1_Consent_Verification } from './R4_1_Consent_Verification'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Consent      extends R4_1_DomainResource
{

   static def : string = 'Consent';
   identifier : R4_1_Identifier [];
   status : R4_1_ConsentStateEnum ;
   scope : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   patient : R4_1_Reference ;
   dateTime : string ;
   performer : R4_1_Reference [];
   organization : R4_1_Reference [];
   sourceAttachment : R4_1_Attachment ;
   sourceReference : R4_1_Reference ;
   policy : R4_1_Consent_Policy [];
   policyRule : R4_1_CodeableConcept ;
   verification : R4_1_Consent_Verification [];
   provision : R4_1_Consent_Provision ;
}

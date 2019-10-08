import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ConsentStateEnum } from './R4_ConsentStateEnum'
import { R4_Consent_Policy } from './R4_Consent_Policy'
import { R4_Consent_Provision } from './R4_Consent_Provision'
import { R4_Consent_Verification } from './R4_Consent_Verification'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Consent      extends R4_DomainResource
{

   static def : string = 'Consent';
   identifier : R4_Identifier [];
   status : R4_ConsentStateEnum ;
   scope : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   patient : R4_Reference ;
   dateTime : string ;
   performer : R4_Reference [];
   organization : R4_Reference [];
   sourceAttachment : R4_Attachment ;
   sourceReference : R4_Reference ;
   policy : R4_Consent_Policy [];
   policyRule : R4_CodeableConcept ;
   verification : R4_Consent_Verification [];
   provision : R4_Consent_Provision ;
}

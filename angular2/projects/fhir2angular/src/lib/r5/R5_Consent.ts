import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ConsentStateEnum } from './R5_ConsentStateEnum'
import { R5_Consent_Policy } from './R5_Consent_Policy'
import { R5_Consent_Provision } from './R5_Consent_Provision'
import { R5_Consent_Verification } from './R5_Consent_Verification'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Consent      extends R5_DomainResource
{

   static def : string = 'Consent';
   identifier : R5_Identifier [];
   status : R5_ConsentStateEnum ;
   scope : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   patient : R5_Reference ;
   dateTime : string ;
   performer : R5_Reference [];
   organization : R5_Reference [];
   sourceAttachment : R5_Attachment ;
   sourceReference : R5_Reference ;
   policy : R5_Consent_Policy [];
   policyRule : R5_CodeableConcept ;
   verification : R5_Consent_Verification [];
   provision : R5_Consent_Provision ;
}

import { Attachment } from './Attachment'
import { CodeableConcept } from './CodeableConcept'
import { ConsentStateEnum } from './ConsentStateEnum'
import { Consent_Policy } from './Consent_Policy'
import { Consent_Provision } from './Consent_Provision'
import { Consent_Verification } from './Consent_Verification'
import { DomainResource } from './DomainResource'
import { Identifier } from './Identifier'
import { Reference } from './Reference'

export class Consent      extends DomainResource
{

   static def : string = 'Consent';
   identifier : Identifier [];
   status : ConsentStateEnum ;
   scope : CodeableConcept ;
   category : CodeableConcept [];
   patient : Reference ;
   dateTime : string ;
   performer : Reference [];
   organization : Reference [];
   sourceAttachment : Attachment [];
   sourceReference : Reference [];
   policy : Consent_Policy [];
   policyRule : CodeableConcept ;
   verification : Consent_Verification [];
   provision : Consent_Provision ;
}

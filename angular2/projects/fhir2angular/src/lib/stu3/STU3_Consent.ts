import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ConsentStateEnum } from './STU3_ConsentStateEnum'
import { STU3_Consent_Actor } from './STU3_Consent_Actor'
import { STU3_Consent_Data } from './STU3_Consent_Data'
import { STU3_Consent_Except } from './STU3_Consent_Except'
import { STU3_Consent_Policy } from './STU3_Consent_Policy'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Consent      extends STU3_DomainResource
{

   static def : string = 'Consent';
   identifier : STU3_Identifier ;
   status : STU3_ConsentStateEnum ;
   category : STU3_CodeableConcept [];
   patient : STU3_Reference ;
   period : STU3_Period ;
   dateTime : string ;
   consentingParty : STU3_Reference [];
   actor : STU3_Consent_Actor [];
   action : STU3_CodeableConcept [];
   organization : STU3_Reference [];
   sourceAttachment : STU3_Attachment ;
   sourceIdentifier : STU3_Identifier ;
   sourceReference : STU3_Reference ;
   policy : STU3_Consent_Policy [];
   policyRule : string ;
   securityLabel : STU3_Coding [];
   purpose : STU3_Coding [];
   dataPeriod : STU3_Period ;
   data : STU3_Consent_Data [];
   except : STU3_Consent_Except [];
}

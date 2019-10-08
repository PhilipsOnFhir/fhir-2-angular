import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HealthcareService_AvailableTime } from './STU3_HealthcareService_AvailableTime'
import { STU3_HealthcareService_NotAvailable } from './STU3_HealthcareService_NotAvailable'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_HealthcareService      extends STU3_DomainResource
{

   static def : string = 'HealthcareService';
   identifier : STU3_Identifier [];
   active : boolean ;
   providedBy : STU3_Reference ;
   category : STU3_CodeableConcept ;
   type : STU3_CodeableConcept [];
   specialty : STU3_CodeableConcept [];
   location : STU3_Reference [];
   name : string ;
   comment : string ;
   extraDetails : string ;
   photo : STU3_Attachment ;
   telecom : STU3_ContactPoint [];
   coverageArea : STU3_Reference [];
   serviceProvisionCode : STU3_CodeableConcept [];
   eligibility : STU3_CodeableConcept ;
   eligibilityNote : string ;
   programName : string [];
   characteristic : STU3_CodeableConcept [];
   referralMethod : STU3_CodeableConcept [];
   appointmentRequired : boolean ;
   availableTime : STU3_HealthcareService_AvailableTime [];
   notAvailable : STU3_HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : STU3_Reference [];
}

import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HealthcareService_AvailableTime } from './R5_HealthcareService_AvailableTime'
import { R5_HealthcareService_Eligibility } from './R5_HealthcareService_Eligibility'
import { R5_HealthcareService_NotAvailable } from './R5_HealthcareService_NotAvailable'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_HealthcareService      extends R5_DomainResource
{

   static def : string = 'HealthcareService';
   identifier : R5_Identifier [];
   active : boolean ;
   providedBy : R5_Reference ;
   category : R5_CodeableConcept [];
   type : R5_CodeableConcept [];
   specialty : R5_CodeableConcept [];
   location : R5_Reference [];
   name : string ;
   comment : string ;
   extraDetails : string ;
   photo : R5_Attachment ;
   telecom : R5_ContactPoint [];
   coverageArea : R5_Reference [];
   serviceProvisionCode : R5_CodeableConcept [];
   eligibility : R5_HealthcareService_Eligibility [];
   program : R5_CodeableConcept [];
   characteristic : R5_CodeableConcept [];
   communication : R5_CodeableConcept [];
   referralMethod : R5_CodeableConcept [];
   appointmentRequired : boolean ;
   availableTime : R5_HealthcareService_AvailableTime [];
   notAvailable : R5_HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : R5_Reference [];
}

import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HealthcareService_AvailableTime } from './R4_HealthcareService_AvailableTime'
import { R4_HealthcareService_Eligibility } from './R4_HealthcareService_Eligibility'
import { R4_HealthcareService_NotAvailable } from './R4_HealthcareService_NotAvailable'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_HealthcareService      extends R4_DomainResource
{

   static def : string = 'HealthcareService';
   identifier : R4_Identifier [];
   active : boolean ;
   providedBy : R4_Reference ;
   category : R4_CodeableConcept [];
   type : R4_CodeableConcept [];
   specialty : R4_CodeableConcept [];
   location : R4_Reference [];
   name : string ;
   comment : string ;
   extraDetails : string ;
   photo : R4_Attachment ;
   telecom : R4_ContactPoint [];
   coverageArea : R4_Reference [];
   serviceProvisionCode : R4_CodeableConcept [];
   eligibility : R4_HealthcareService_Eligibility [];
   program : R4_CodeableConcept [];
   characteristic : R4_CodeableConcept [];
   communication : R4_CodeableConcept [];
   referralMethod : R4_CodeableConcept [];
   appointmentRequired : boolean ;
   availableTime : R4_HealthcareService_AvailableTime [];
   notAvailable : R4_HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : R4_Reference [];
}

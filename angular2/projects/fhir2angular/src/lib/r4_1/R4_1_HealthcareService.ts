import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HealthcareService_AvailableTime } from './R4_1_HealthcareService_AvailableTime'
import { R4_1_HealthcareService_Eligibility } from './R4_1_HealthcareService_Eligibility'
import { R4_1_HealthcareService_NotAvailable } from './R4_1_HealthcareService_NotAvailable'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_HealthcareService      extends R4_1_DomainResource
{

   static def : string = 'HealthcareService';
   identifier : R4_1_Identifier [];
   active : boolean ;
   providedBy : R4_1_Reference ;
   category : R4_1_CodeableConcept [];
   type : R4_1_CodeableConcept [];
   specialty : R4_1_CodeableConcept [];
   location : R4_1_Reference [];
   name : string ;
   comment : string ;
   extraDetails : string ;
   photo : R4_1_Attachment ;
   telecom : R4_1_ContactPoint [];
   coverageArea : R4_1_Reference [];
   serviceProvisionCode : R4_1_CodeableConcept [];
   eligibility : R4_1_HealthcareService_Eligibility [];
   program : R4_1_CodeableConcept [];
   characteristic : R4_1_CodeableConcept [];
   communication : R4_1_CodeableConcept [];
   referralMethod : R4_1_CodeableConcept [];
   appointmentRequired : boolean ;
   availableTime : R4_1_HealthcareService_AvailableTime [];
   notAvailable : R4_1_HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : R4_1_Reference [];
}

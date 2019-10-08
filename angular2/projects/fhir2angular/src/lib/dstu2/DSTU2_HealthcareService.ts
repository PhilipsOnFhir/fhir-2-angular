import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HealthcareService_AvailableTime } from './DSTU2_HealthcareService_AvailableTime'
import { DSTU2_HealthcareService_NotAvailable } from './DSTU2_HealthcareService_NotAvailable'
import { DSTU2_HealthcareService_ServiceType } from './DSTU2_HealthcareService_ServiceType'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_HealthcareService      extends DSTU2_DomainResource
{

   static def : string = 'HealthcareService';
   identifier : DSTU2_Identifier [];
   providedBy : DSTU2_Reference ;
   serviceCategory : DSTU2_CodeableConcept ;
   serviceType : DSTU2_HealthcareService_ServiceType [];
   location : DSTU2_Reference ;
   serviceName : string ;
   comment : string ;
   extraDetails : string ;
   photo : DSTU2_Attachment ;
   telecom : DSTU2_ContactPoint [];
   coverageArea : DSTU2_Reference [];
   serviceProvisionCode : DSTU2_CodeableConcept [];
   eligibility : DSTU2_CodeableConcept ;
   eligibilityNote : string ;
   programName : string [];
   characteristic : DSTU2_CodeableConcept [];
   referralMethod : DSTU2_CodeableConcept [];
   publicKey : string ;
   appointmentRequired : boolean ;
   availableTime : DSTU2_HealthcareService_AvailableTime [];
   notAvailable : DSTU2_HealthcareService_NotAvailable [];
   availabilityExceptions : string ;
}

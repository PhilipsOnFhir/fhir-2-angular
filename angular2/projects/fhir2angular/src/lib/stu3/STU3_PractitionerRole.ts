import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_PractitionerRole_AvailableTime } from './STU3_PractitionerRole_AvailableTime'
import { STU3_PractitionerRole_NotAvailable } from './STU3_PractitionerRole_NotAvailable'
import { STU3_Reference } from './STU3_Reference'

export class STU3_PractitionerRole      extends STU3_DomainResource
{

   static def : string = 'PractitionerRole';
   identifier : STU3_Identifier [];
   active : boolean ;
   period : STU3_Period ;
   practitioner : STU3_Reference ;
   organization : STU3_Reference ;
   code : STU3_CodeableConcept [];
   specialty : STU3_CodeableConcept [];
   location : STU3_Reference [];
   healthcareService : STU3_Reference [];
   telecom : STU3_ContactPoint [];
   availableTime : STU3_PractitionerRole_AvailableTime [];
   notAvailable : STU3_PractitionerRole_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : STU3_Reference [];
}

import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PractitionerRole_AvailableTime } from './R4_1_PractitionerRole_AvailableTime'
import { R4_1_PractitionerRole_NotAvailable } from './R4_1_PractitionerRole_NotAvailable'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_PractitionerRole      extends R4_1_DomainResource
{

   static def : string = 'PractitionerRole';
   identifier : R4_1_Identifier [];
   active : boolean ;
   period : R4_1_Period ;
   practitioner : R4_1_Reference ;
   organization : R4_1_Reference ;
   code : R4_1_CodeableConcept [];
   specialty : R4_1_CodeableConcept [];
   location : R4_1_Reference [];
   healthcareService : R4_1_Reference [];
   telecom : R4_1_ContactPoint [];
   availableTime : R4_1_PractitionerRole_AvailableTime [];
   notAvailable : R4_1_PractitionerRole_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : R4_1_Reference [];
}

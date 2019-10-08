import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PractitionerRole_AvailableTime } from './R4_PractitionerRole_AvailableTime'
import { R4_PractitionerRole_NotAvailable } from './R4_PractitionerRole_NotAvailable'
import { R4_Reference } from './R4_Reference'

export class R4_PractitionerRole      extends R4_DomainResource
{

   static def : string = 'PractitionerRole';
   identifier : R4_Identifier [];
   active : boolean ;
   period : R4_Period ;
   practitioner : R4_Reference ;
   organization : R4_Reference ;
   code : R4_CodeableConcept [];
   specialty : R4_CodeableConcept [];
   location : R4_Reference [];
   healthcareService : R4_Reference [];
   telecom : R4_ContactPoint [];
   availableTime : R4_PractitionerRole_AvailableTime [];
   notAvailable : R4_PractitionerRole_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : R4_Reference [];
}

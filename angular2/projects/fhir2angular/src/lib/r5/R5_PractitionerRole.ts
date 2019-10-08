import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PractitionerRole_AvailableTime } from './R5_PractitionerRole_AvailableTime'
import { R5_PractitionerRole_NotAvailable } from './R5_PractitionerRole_NotAvailable'
import { R5_Reference } from './R5_Reference'

export class R5_PractitionerRole      extends R5_DomainResource
{

   static def : string = 'PractitionerRole';
   identifier : R5_Identifier [];
   active : boolean ;
   period : R5_Period ;
   practitioner : R5_Reference ;
   organization : R5_Reference ;
   code : R5_CodeableConcept [];
   specialty : R5_CodeableConcept [];
   location : R5_Reference [];
   healthcareService : R5_Reference [];
   telecom : R5_ContactPoint [];
   availableTime : R5_PractitionerRole_AvailableTime [];
   notAvailable : R5_PractitionerRole_NotAvailable [];
   availabilityExceptions : string ;
   endpoint : R5_Reference [];
}

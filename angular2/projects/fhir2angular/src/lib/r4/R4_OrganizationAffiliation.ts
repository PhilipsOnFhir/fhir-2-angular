import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_OrganizationAffiliation      extends R4_DomainResource
{

   static def : string = 'OrganizationAffiliation';
   identifier : R4_Identifier [];
   active : boolean ;
   period : R4_Period ;
   organization : R4_Reference ;
   participatingOrganization : R4_Reference ;
   network : R4_Reference [];
   code : R4_CodeableConcept [];
   specialty : R4_CodeableConcept [];
   location : R4_Reference [];
   healthcareService : R4_Reference [];
   telecom : R4_ContactPoint [];
   endpoint : R4_Reference [];
}

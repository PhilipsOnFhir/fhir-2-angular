import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_OrganizationAffiliation      extends R5_DomainResource
{

   static def : string = 'OrganizationAffiliation';
   identifier : R5_Identifier [];
   active : boolean ;
   period : R5_Period ;
   organization : R5_Reference ;
   participatingOrganization : R5_Reference ;
   network : R5_Reference [];
   code : R5_CodeableConcept [];
   specialty : R5_CodeableConcept [];
   location : R5_Reference [];
   healthcareService : R5_Reference [];
   telecom : R5_ContactPoint [];
   endpoint : R5_Reference [];
}

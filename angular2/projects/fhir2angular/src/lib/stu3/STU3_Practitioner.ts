import { STU3_Address } from './STU3_Address'
import { STU3_AdministrativeGenderEnum } from './STU3_AdministrativeGenderEnum'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Practitioner_Qualification } from './STU3_Practitioner_Qualification'

export class STU3_Practitioner      extends STU3_DomainResource
{

   static def : string = 'Practitioner';
   identifier : STU3_Identifier [];
   active : boolean ;
   name : STU3_HumanName [];
   telecom : STU3_ContactPoint [];
   address : STU3_Address [];
   gender : STU3_AdministrativeGenderEnum ;
   birthDate : string ;
   photo : STU3_Attachment [];
   qualification : STU3_Practitioner_Qualification [];
   communication : STU3_CodeableConcept [];
}

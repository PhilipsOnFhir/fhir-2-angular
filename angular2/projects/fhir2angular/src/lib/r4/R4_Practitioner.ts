import { R4_Address } from './R4_Address'
import { R4_AdministrativeGenderEnum } from './R4_AdministrativeGenderEnum'
import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Practitioner_Qualification } from './R4_Practitioner_Qualification'

export class R4_Practitioner      extends R4_DomainResource
{

   static def : string = 'Practitioner';
   identifier : R4_Identifier [];
   active : boolean ;
   name : R4_HumanName [];
   telecom : R4_ContactPoint [];
   address : R4_Address [];
   gender : R4_AdministrativeGenderEnum ;
   birthDate : string ;
   photo : R4_Attachment [];
   qualification : R4_Practitioner_Qualification [];
   communication : R4_CodeableConcept [];
}

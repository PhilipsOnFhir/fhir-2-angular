import { R4_1_Address } from './R4_1_Address'
import { R4_1_AdministrativeGenderEnum } from './R4_1_AdministrativeGenderEnum'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Practitioner_Qualification } from './R4_1_Practitioner_Qualification'

export class R4_1_Practitioner      extends R4_1_DomainResource
{

   static def : string = 'Practitioner';
   identifier : R4_1_Identifier [];
   active : boolean ;
   name : R4_1_HumanName [];
   telecom : R4_1_ContactPoint [];
   address : R4_1_Address [];
   gender : R4_1_AdministrativeGenderEnum ;
   birthDate : string ;
   photo : R4_1_Attachment [];
   qualification : R4_1_Practitioner_Qualification [];
   communication : R4_1_CodeableConcept [];
}

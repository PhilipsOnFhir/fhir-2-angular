import { R5_Address } from './R5_Address'
import { R5_AdministrativeGenderEnum } from './R5_AdministrativeGenderEnum'
import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HumanName } from './R5_HumanName'
import { R5_Identifier } from './R5_Identifier'
import { R5_Practitioner_Qualification } from './R5_Practitioner_Qualification'

export class R5_Practitioner      extends R5_DomainResource
{

   static def : string = 'Practitioner';
   identifier : R5_Identifier [];
   active : boolean ;
   name : R5_HumanName [];
   telecom : R5_ContactPoint [];
   address : R5_Address [];
   gender : R5_AdministrativeGenderEnum ;
   birthDate : string ;
   photo : R5_Attachment [];
   qualification : R5_Practitioner_Qualification [];
   communication : R5_CodeableConcept [];
}

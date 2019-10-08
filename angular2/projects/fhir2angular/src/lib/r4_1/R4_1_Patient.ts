import { R4_1_Address } from './R4_1_Address'
import { R4_1_AdministrativeGenderEnum } from './R4_1_AdministrativeGenderEnum'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Patient_Communication } from './R4_1_Patient_Communication'
import { R4_1_Patient_Contact } from './R4_1_Patient_Contact'
import { R4_1_Patient_Link } from './R4_1_Patient_Link'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Patient      extends R4_1_DomainResource
{

   static def : string = 'Patient';
   identifier : R4_1_Identifier [];
   active : boolean ;
   name : R4_1_HumanName [];
   telecom : R4_1_ContactPoint [];
   gender : R4_1_AdministrativeGenderEnum ;
   birthDate : string ;
   deceasedBoolean : boolean ;
   deceasedDateTime : string ;
   address : R4_1_Address [];
   maritalStatus : R4_1_CodeableConcept ;
   multipleBirthBoolean : boolean ;
   multipleBirthInteger : string ;
   photo : R4_1_Attachment [];
   contact : R4_1_Patient_Contact [];
   communication : R4_1_Patient_Communication [];
   generalPractitioner : R4_1_Reference [];
   managingOrganization : R4_1_Reference ;
   link : R4_1_Patient_Link [];
}

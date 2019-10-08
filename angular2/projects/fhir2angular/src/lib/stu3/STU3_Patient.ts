import { STU3_Address } from './STU3_Address'
import { STU3_AdministrativeGenderEnum } from './STU3_AdministrativeGenderEnum'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Patient_Animal } from './STU3_Patient_Animal'
import { STU3_Patient_Communication } from './STU3_Patient_Communication'
import { STU3_Patient_Contact } from './STU3_Patient_Contact'
import { STU3_Patient_Link } from './STU3_Patient_Link'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Patient      extends STU3_DomainResource
{

   static def : string = 'Patient';
   identifier : STU3_Identifier [];
   active : boolean ;
   name : STU3_HumanName [];
   telecom : STU3_ContactPoint [];
   gender : STU3_AdministrativeGenderEnum ;
   birthDate : string ;
   deceasedBoolean : boolean ;
   deceasedDateTime : string ;
   address : STU3_Address [];
   maritalStatus : STU3_CodeableConcept ;
   multipleBirthBoolean : boolean ;
   multipleBirthInteger : string ;
   photo : STU3_Attachment [];
   contact : STU3_Patient_Contact [];
   animal : STU3_Patient_Animal ;
   communication : STU3_Patient_Communication [];
   generalPractitioner : STU3_Reference [];
   managingOrganization : STU3_Reference ;
   link : STU3_Patient_Link [];
}

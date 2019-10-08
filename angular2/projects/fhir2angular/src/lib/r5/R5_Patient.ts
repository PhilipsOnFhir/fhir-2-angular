import { R5_Address } from './R5_Address'
import { R5_AdministrativeGenderEnum } from './R5_AdministrativeGenderEnum'
import { R5_Attachment } from './R5_Attachment'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HumanName } from './R5_HumanName'
import { R5_Identifier } from './R5_Identifier'
import { R5_Patient_Communication } from './R5_Patient_Communication'
import { R5_Patient_Contact } from './R5_Patient_Contact'
import { R5_Patient_Link } from './R5_Patient_Link'
import { R5_Reference } from './R5_Reference'

export class R5_Patient      extends R5_DomainResource
{

   static def : string = 'Patient';
   identifier : R5_Identifier [];
   active : boolean ;
   name : R5_HumanName [];
   telecom : R5_ContactPoint [];
   gender : R5_AdministrativeGenderEnum ;
   birthDate : string ;
   deceasedBoolean : boolean ;
   deceasedDateTime : string ;
   address : R5_Address [];
   maritalStatus : R5_CodeableConcept ;
   multipleBirthBoolean : boolean ;
   multipleBirthInteger : string ;
   photo : R5_Attachment [];
   contact : R5_Patient_Contact [];
   communication : R5_Patient_Communication [];
   generalPractitioner : R5_Reference [];
   managingOrganization : R5_Reference ;
   link : R5_Patient_Link [];
}

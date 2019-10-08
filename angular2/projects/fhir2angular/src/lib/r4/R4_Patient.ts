import { R4_Address } from './R4_Address'
import { R4_AdministrativeGenderEnum } from './R4_AdministrativeGenderEnum'
import { R4_Attachment } from './R4_Attachment'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Patient_Communication } from './R4_Patient_Communication'
import { R4_Patient_Contact } from './R4_Patient_Contact'
import { R4_Patient_Link } from './R4_Patient_Link'
import { R4_Reference } from './R4_Reference'

export class R4_Patient      extends R4_DomainResource
{

   static def : string = 'Patient';
   identifier : R4_Identifier [];
   active : boolean ;
   name : R4_HumanName [];
   telecom : R4_ContactPoint [];
   gender : R4_AdministrativeGenderEnum ;
   birthDate : string ;
   deceasedBoolean : boolean ;
   deceasedDateTime : string ;
   address : R4_Address [];
   maritalStatus : R4_CodeableConcept ;
   multipleBirthBoolean : boolean ;
   multipleBirthInteger : string ;
   photo : R4_Attachment [];
   contact : R4_Patient_Contact [];
   communication : R4_Patient_Communication [];
   generalPractitioner : R4_Reference [];
   managingOrganization : R4_Reference ;
   link : R4_Patient_Link [];
}

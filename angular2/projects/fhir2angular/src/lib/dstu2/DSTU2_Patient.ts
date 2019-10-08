import { DSTU2_Address } from './DSTU2_Address'
import { DSTU2_Attachment } from './DSTU2_Attachment'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HumanName } from './DSTU2_HumanName'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Patient_Animal } from './DSTU2_Patient_Animal'
import { DSTU2_Patient_Communication } from './DSTU2_Patient_Communication'
import { DSTU2_Patient_Contact } from './DSTU2_Patient_Contact'
import { DSTU2_Patient_Link } from './DSTU2_Patient_Link'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Patient      extends DSTU2_DomainResource
{

   static def : string = 'Patient';
   identifier : DSTU2_Identifier [];
   active : boolean ;
   name : DSTU2_HumanName [];
   telecom : DSTU2_ContactPoint [];
   gender : string ;
   birthDate : string ;
   deceasedBoolean : boolean ;
   deceasedDateTime : string ;
   address : DSTU2_Address [];
   maritalStatus : DSTU2_CodeableConcept ;
   multipleBirthBoolean : boolean ;
   multipleBirthInteger : string ;
   photo : DSTU2_Attachment [];
   contact : DSTU2_Patient_Contact [];
   animal : DSTU2_Patient_Animal ;
   communication : DSTU2_Patient_Communication [];
   careProvider : DSTU2_Reference [];
   managingOrganization : DSTU2_Reference ;
   link : DSTU2_Patient_Link [];
}

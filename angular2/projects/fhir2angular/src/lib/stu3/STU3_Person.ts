import { STU3_Address } from './STU3_Address'
import { STU3_AdministrativeGenderEnum } from './STU3_AdministrativeGenderEnum'
import { STU3_Attachment } from './STU3_Attachment'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HumanName } from './STU3_HumanName'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Person_Link } from './STU3_Person_Link'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Person      extends STU3_DomainResource
{

   static def : string = 'Person';
   identifier : STU3_Identifier [];
   name : STU3_HumanName [];
   telecom : STU3_ContactPoint [];
   gender : STU3_AdministrativeGenderEnum ;
   birthDate : string ;
   address : STU3_Address [];
   photo : STU3_Attachment ;
   managingOrganization : STU3_Reference ;
   active : boolean ;
   link : STU3_Person_Link [];
}

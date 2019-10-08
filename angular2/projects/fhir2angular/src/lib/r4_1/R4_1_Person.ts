import { R4_1_Address } from './R4_1_Address'
import { R4_1_AdministrativeGenderEnum } from './R4_1_AdministrativeGenderEnum'
import { R4_1_Attachment } from './R4_1_Attachment'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HumanName } from './R4_1_HumanName'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Person_Link } from './R4_1_Person_Link'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Person      extends R4_1_DomainResource
{

   static def : string = 'Person';
   identifier : R4_1_Identifier [];
   name : R4_1_HumanName [];
   telecom : R4_1_ContactPoint [];
   gender : R4_1_AdministrativeGenderEnum ;
   birthDate : string ;
   address : R4_1_Address [];
   photo : R4_1_Attachment ;
   managingOrganization : R4_1_Reference ;
   active : boolean ;
   link : R4_1_Person_Link [];
}

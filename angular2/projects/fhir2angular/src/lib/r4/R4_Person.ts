import { R4_Address } from './R4_Address'
import { R4_AdministrativeGenderEnum } from './R4_AdministrativeGenderEnum'
import { R4_Attachment } from './R4_Attachment'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HumanName } from './R4_HumanName'
import { R4_Identifier } from './R4_Identifier'
import { R4_Person_Link } from './R4_Person_Link'
import { R4_Reference } from './R4_Reference'

export class R4_Person      extends R4_DomainResource
{

   static def : string = 'Person';
   identifier : R4_Identifier [];
   name : R4_HumanName [];
   telecom : R4_ContactPoint [];
   gender : R4_AdministrativeGenderEnum ;
   birthDate : string ;
   address : R4_Address [];
   photo : R4_Attachment ;
   managingOrganization : R4_Reference ;
   active : boolean ;
   link : R4_Person_Link [];
}

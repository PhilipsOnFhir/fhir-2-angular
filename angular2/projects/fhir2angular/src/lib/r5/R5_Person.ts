import { R5_Address } from './R5_Address'
import { R5_AdministrativeGenderEnum } from './R5_AdministrativeGenderEnum'
import { R5_Attachment } from './R5_Attachment'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HumanName } from './R5_HumanName'
import { R5_Identifier } from './R5_Identifier'
import { R5_Person_Link } from './R5_Person_Link'
import { R5_Reference } from './R5_Reference'

export class R5_Person      extends R5_DomainResource
{

   static def : string = 'Person';
   identifier : R5_Identifier [];
   name : R5_HumanName [];
   telecom : R5_ContactPoint [];
   gender : R5_AdministrativeGenderEnum ;
   birthDate : string ;
   address : R5_Address [];
   photo : R5_Attachment ;
   managingOrganization : R5_Reference ;
   active : boolean ;
   link : R5_Person_Link [];
}

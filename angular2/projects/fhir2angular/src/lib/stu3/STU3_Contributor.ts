import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_ContributorTypeEnum } from './STU3_ContributorTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Element } from './STU3_Element'

export class STU3_Contributor      extends STU3_Element
{

   static def : string = 'Contributor';
   type : STU3_ContributorTypeEnum ;
   name : string ;
   contact : STU3_ContactDetail [];
}

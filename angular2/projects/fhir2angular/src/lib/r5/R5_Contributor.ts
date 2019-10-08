import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_ContributorTypeEnum } from './R5_ContributorTypeEnum'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Element } from './R5_Element'

export class R5_Contributor      extends R5_Element
{

   static def : string = 'Contributor';
   type : R5_ContributorTypeEnum ;
   name : string ;
   contact : R5_ContactDetail [];
}

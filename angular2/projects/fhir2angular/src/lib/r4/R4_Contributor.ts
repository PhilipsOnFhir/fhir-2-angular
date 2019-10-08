import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_ContributorTypeEnum } from './R4_ContributorTypeEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Element } from './R4_Element'

export class R4_Contributor      extends R4_Element
{

   static def : string = 'Contributor';
   type : R4_ContributorTypeEnum ;
   name : string ;
   contact : R4_ContactDetail [];
}

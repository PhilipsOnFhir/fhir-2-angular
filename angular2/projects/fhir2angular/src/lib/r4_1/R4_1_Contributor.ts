import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_ContributorTypeEnum } from './R4_1_ContributorTypeEnum'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Element } from './R4_1_Element'

export class R4_1_Contributor      extends R4_1_Element
{

   static def : string = 'Contributor';
   type : R4_1_ContributorTypeEnum ;
   name : string ;
   contact : R4_1_ContactDetail [];
}

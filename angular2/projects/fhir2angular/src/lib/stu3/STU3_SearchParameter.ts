import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'
import { STU3_SearchComparatorEnum } from './STU3_SearchComparatorEnum'
import { STU3_SearchModifierCodeEnum } from './STU3_SearchModifierCodeEnum'
import { STU3_SearchParamTypeEnum } from './STU3_SearchParamTypeEnum'
import { STU3_SearchParameter_Component } from './STU3_SearchParameter_Component'
import { STU3_UsageContext } from './STU3_UsageContext'
import { STU3_XPathUsageTypeEnum } from './STU3_XPathUsageTypeEnum'

export class STU3_SearchParameter      extends STU3_DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   version : string ;
   name : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   code : string ;
   base : STU3_ResourceTypeEnum [];
   type : STU3_SearchParamTypeEnum ;
   derivedFrom : string ;
   description : string ;
   expression : string ;
   xpath : string ;
   xpathUsage : STU3_XPathUsageTypeEnum ;
   target : STU3_ResourceTypeEnum [];
   comparator : STU3_SearchComparatorEnum [];
   modifier : STU3_SearchModifierCodeEnum [];
   chain : string [];
   component : STU3_SearchParameter_Component [];
}

import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_SearchComparatorEnum } from './R4_1_SearchComparatorEnum'
import { R4_1_SearchModifierCodeEnum } from './R4_1_SearchModifierCodeEnum'
import { R4_1_SearchParamTypeEnum } from './R4_1_SearchParamTypeEnum'
import { R4_1_SearchParameter_Component } from './R4_1_SearchParameter_Component'
import { R4_1_UsageContext } from './R4_1_UsageContext'
import { R4_1_XPathUsageTypeEnum } from './R4_1_XPathUsageTypeEnum'

export class R4_1_SearchParameter      extends R4_1_DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   version : string ;
   name : string ;
   derivedFrom : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   code : string ;
   base : string [];
   type : R4_1_SearchParamTypeEnum ;
   expression : string ;
   xpath : string ;
   xpathUsage : R4_1_XPathUsageTypeEnum ;
   target : string [];
   multipleOr : boolean ;
   multipleAnd : boolean ;
   comparator : R4_1_SearchComparatorEnum [];
   modifier : R4_1_SearchModifierCodeEnum [];
   chain : string [];
   component : R4_1_SearchParameter_Component [];
}

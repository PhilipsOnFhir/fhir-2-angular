import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_SearchComparatorEnum } from './R4_SearchComparatorEnum'
import { R4_SearchModifierCodeEnum } from './R4_SearchModifierCodeEnum'
import { R4_SearchParamTypeEnum } from './R4_SearchParamTypeEnum'
import { R4_SearchParameter_Component } from './R4_SearchParameter_Component'
import { R4_UsageContext } from './R4_UsageContext'
import { R4_XPathUsageTypeEnum } from './R4_XPathUsageTypeEnum'

export class R4_SearchParameter      extends R4_DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   version : string ;
   name : string ;
   derivedFrom : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   code : string ;
   base : string [];
   type : R4_SearchParamTypeEnum ;
   expression : string ;
   xpath : string ;
   xpathUsage : R4_XPathUsageTypeEnum ;
   target : string [];
   multipleOr : boolean ;
   multipleAnd : boolean ;
   comparator : R4_SearchComparatorEnum [];
   modifier : R4_SearchModifierCodeEnum [];
   chain : string [];
   component : R4_SearchParameter_Component [];
}

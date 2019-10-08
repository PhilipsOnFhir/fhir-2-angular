import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_SearchComparatorEnum } from './R5_SearchComparatorEnum'
import { R5_SearchModifierCodeEnum } from './R5_SearchModifierCodeEnum'
import { R5_SearchParamTypeEnum } from './R5_SearchParamTypeEnum'
import { R5_SearchParameter_Component } from './R5_SearchParameter_Component'
import { R5_UsageContext } from './R5_UsageContext'
import { R5_XPathUsageTypeEnum } from './R5_XPathUsageTypeEnum'

export class R5_SearchParameter      extends R5_DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   version : string ;
   name : string ;
   derivedFrom : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   code : string ;
   base : string [];
   type : R5_SearchParamTypeEnum ;
   expression : string ;
   xpath : string ;
   xpathUsage : R5_XPathUsageTypeEnum ;
   target : string [];
   multipleOr : boolean ;
   multipleAnd : boolean ;
   comparator : R5_SearchComparatorEnum [];
   modifier : R5_SearchModifierCodeEnum [];
   chain : string [];
   component : R5_SearchParameter_Component [];
}

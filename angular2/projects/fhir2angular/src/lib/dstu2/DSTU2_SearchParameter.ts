import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_SearchParameter_Contact } from './DSTU2_SearchParameter_Contact'
import { DSTU2_XPathUsageTypeEnum } from './DSTU2_XPathUsageTypeEnum'

export class DSTU2_SearchParameter      extends DSTU2_DomainResource
{

   static def : string = 'SearchParameter';
   url : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_SearchParameter_Contact [];
   date : string ;
   requirements : string ;
   code : string ;
   base : string ;
   type : string ;
   description : string ;
   xpath : string ;
   xpathUsage : DSTU2_XPathUsageTypeEnum ;
   target : string [];
}

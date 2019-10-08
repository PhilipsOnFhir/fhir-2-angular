import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Bundle_Link } from './DSTU2_Bundle_Link'
import { DSTU2_Bundle_Request } from './DSTU2_Bundle_Request'
import { DSTU2_Bundle_Response } from './DSTU2_Bundle_Response'
import { DSTU2_Bundle_Search } from './DSTU2_Bundle_Search'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Bundle_Entry      extends DSTU2_BackboneElement
{

   static def : string = 'Bundle_Entry';
   link : DSTU2_Bundle_Link [];
   fullUrl : string ;
   resource : DSTU2_DomainResource ;
   search : DSTU2_Bundle_Search ;
   request : DSTU2_Bundle_Request ;
   response : DSTU2_Bundle_Response ;
}

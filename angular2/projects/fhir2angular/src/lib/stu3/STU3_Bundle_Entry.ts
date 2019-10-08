import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Bundle_Link } from './STU3_Bundle_Link'
import { STU3_Bundle_Request } from './STU3_Bundle_Request'
import { STU3_Bundle_Response } from './STU3_Bundle_Response'
import { STU3_Bundle_Search } from './STU3_Bundle_Search'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Bundle_Entry      extends STU3_BackboneElement
{

   static def : string = 'Bundle_Entry';
   link : STU3_Bundle_Link [];
   fullUrl : string ;
   resource : STU3_DomainResource ;
   search : STU3_Bundle_Search ;
   request : STU3_Bundle_Request ;
   response : STU3_Bundle_Response ;
}

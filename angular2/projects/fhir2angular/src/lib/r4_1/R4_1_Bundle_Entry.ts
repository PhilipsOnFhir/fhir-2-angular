import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Bundle_Link } from './R4_1_Bundle_Link'
import { R4_1_Bundle_Request } from './R4_1_Bundle_Request'
import { R4_1_Bundle_Response } from './R4_1_Bundle_Response'
import { R4_1_Bundle_Search } from './R4_1_Bundle_Search'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Bundle_Entry      extends R4_1_BackboneElement
{

   static def : string = 'Bundle_Entry';
   link : R4_1_Bundle_Link [];
   fullUrl : string ;
   resource : R4_1_DomainResource ;
   search : R4_1_Bundle_Search ;
   request : R4_1_Bundle_Request ;
   response : R4_1_Bundle_Response ;
}

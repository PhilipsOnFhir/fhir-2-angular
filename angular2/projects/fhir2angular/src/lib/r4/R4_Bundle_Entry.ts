import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Bundle_Link } from './R4_Bundle_Link'
import { R4_Bundle_Request } from './R4_Bundle_Request'
import { R4_Bundle_Response } from './R4_Bundle_Response'
import { R4_Bundle_Search } from './R4_Bundle_Search'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Bundle_Entry      extends R4_BackboneElement
{

   static def : string = 'Bundle_Entry';
   link : R4_Bundle_Link [];
   fullUrl : string ;
   resource : R4_DomainResource ;
   search : R4_Bundle_Search ;
   request : R4_Bundle_Request ;
   response : R4_Bundle_Response ;
}

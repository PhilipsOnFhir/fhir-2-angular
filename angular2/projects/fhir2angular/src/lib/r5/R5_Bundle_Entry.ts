import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Bundle_Link } from './R5_Bundle_Link'
import { R5_Bundle_Request } from './R5_Bundle_Request'
import { R5_Bundle_Response } from './R5_Bundle_Response'
import { R5_Bundle_Search } from './R5_Bundle_Search'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Bundle_Entry      extends R5_BackboneElement
{

   static def : string = 'Bundle_Entry';
   link : R5_Bundle_Link [];
   fullUrl : string ;
   resource : R5_DomainResource ;
   search : R5_Bundle_Search ;
   request : R5_Bundle_Request ;
   response : R5_Bundle_Response ;
}

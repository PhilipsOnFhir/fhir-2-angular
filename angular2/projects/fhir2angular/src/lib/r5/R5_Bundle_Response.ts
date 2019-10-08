import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Bundle_Response      extends R5_BackboneElement
{

   static def : string = 'Bundle_Response';
   status : string ;
   location : string ;
   etag : string ;
   lastModified : string ;
   outcome : R5_DomainResource ;
}

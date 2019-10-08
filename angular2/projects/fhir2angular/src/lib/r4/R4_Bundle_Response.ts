import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Bundle_Response      extends R4_BackboneElement
{

   static def : string = 'Bundle_Response';
   status : string ;
   location : string ;
   etag : string ;
   lastModified : string ;
   outcome : R4_DomainResource ;
}

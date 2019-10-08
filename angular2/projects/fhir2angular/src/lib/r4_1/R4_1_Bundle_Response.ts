import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Bundle_Response      extends R4_1_BackboneElement
{

   static def : string = 'Bundle_Response';
   status : string ;
   location : string ;
   etag : string ;
   lastModified : string ;
   outcome : R4_1_DomainResource ;
}

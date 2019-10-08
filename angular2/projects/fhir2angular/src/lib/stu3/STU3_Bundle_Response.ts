import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Bundle_Response      extends STU3_BackboneElement
{

   static def : string = 'Bundle_Response';
   status : string ;
   location : string ;
   etag : string ;
   lastModified : string ;
   outcome : STU3_DomainResource ;
}

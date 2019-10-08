import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Bundle_Response      extends DSTU2_BackboneElement
{

   static def : string = 'Bundle_Response';
   status : string ;
   location : string ;
   etag : string ;
   lastModified : string ;
}

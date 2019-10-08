import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_HTTPVerbEnum } from './STU3_HTTPVerbEnum'

export class STU3_Bundle_Request      extends STU3_BackboneElement
{

   static def : string = 'Bundle_Request';
   method : STU3_HTTPVerbEnum ;
   url : string ;
   ifNoneMatch : string ;
   ifModifiedSince : string ;
   ifMatch : string ;
   ifNoneExist : string ;
}

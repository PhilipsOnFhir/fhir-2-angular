import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_HTTPVerbEnum } from './R5_HTTPVerbEnum'

export class R5_Bundle_Request      extends R5_BackboneElement
{

   static def : string = 'Bundle_Request';
   method : R5_HTTPVerbEnum ;
   url : string ;
   ifNoneMatch : string ;
   ifModifiedSince : string ;
   ifMatch : string ;
   ifNoneExist : string ;
}

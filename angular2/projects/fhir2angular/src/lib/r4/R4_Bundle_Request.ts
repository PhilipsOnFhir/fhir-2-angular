import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_HTTPVerbEnum } from './R4_HTTPVerbEnum'

export class R4_Bundle_Request      extends R4_BackboneElement
{

   static def : string = 'Bundle_Request';
   method : R4_HTTPVerbEnum ;
   url : string ;
   ifNoneMatch : string ;
   ifModifiedSince : string ;
   ifMatch : string ;
   ifNoneExist : string ;
}

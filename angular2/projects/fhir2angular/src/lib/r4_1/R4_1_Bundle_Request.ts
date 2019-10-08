import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_HTTPVerbEnum } from './R4_1_HTTPVerbEnum'

export class R4_1_Bundle_Request      extends R4_1_BackboneElement
{

   static def : string = 'Bundle_Request';
   method : R4_1_HTTPVerbEnum ;
   url : string ;
   ifNoneMatch : string ;
   ifModifiedSince : string ;
   ifMatch : string ;
   ifNoneExist : string ;
}

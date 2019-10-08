import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_HTTPVerbEnum } from './DSTU2_HTTPVerbEnum'

export class DSTU2_Bundle_Request      extends DSTU2_BackboneElement
{

   static def : string = 'Bundle_Request';
   method : DSTU2_HTTPVerbEnum ;
   url : string ;
   ifNoneMatch : string ;
   ifModifiedSince : string ;
   ifMatch : string ;
   ifNoneExist : string ;
}

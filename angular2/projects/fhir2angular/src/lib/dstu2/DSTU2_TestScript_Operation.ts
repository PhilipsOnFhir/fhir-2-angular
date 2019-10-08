import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_ContentTypeEnum } from './DSTU2_ContentTypeEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TestScript_RequestHeader } from './DSTU2_TestScript_RequestHeader'

export class DSTU2_TestScript_Operation      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : DSTU2_Coding ;
   resource : string ;
   label : string ;
   description : string ;
   accept : DSTU2_ContentTypeEnum ;
   contentType : DSTU2_ContentTypeEnum ;
   destination : string ;
   encodeRequestUrl : boolean ;
   params : string ;
   requestHeader : DSTU2_TestScript_RequestHeader [];
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScriptRequestMethodCodeEnum } from './R4_TestScriptRequestMethodCodeEnum'
import { R4_TestScript_RequestHeader } from './R4_TestScript_RequestHeader'

export class R4_TestScript_Operation      extends R4_BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : R4_Coding ;
   resource : string ;
   label : string ;
   description : string ;
   accept : string ;
   contentType : string ;
   destination : string ;
   encodeRequestUrl : boolean ;
   method : R4_TestScriptRequestMethodCodeEnum ;
   origin : string ;
   params : string ;
   requestHeader : R4_TestScript_RequestHeader [];
   requestId : string ;
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}

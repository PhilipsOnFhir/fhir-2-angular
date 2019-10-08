import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScriptRequestMethodCodeEnum } from './R5_TestScriptRequestMethodCodeEnum'
import { R5_TestScript_RequestHeader } from './R5_TestScript_RequestHeader'

export class R5_TestScript_Operation      extends R5_BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : R5_Coding ;
   resource : string ;
   label : string ;
   description : string ;
   accept : string ;
   contentType : string ;
   destination : string ;
   encodeRequestUrl : boolean ;
   method : R5_TestScriptRequestMethodCodeEnum ;
   origin : string ;
   params : string ;
   requestHeader : R5_TestScript_RequestHeader [];
   requestId : string ;
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}

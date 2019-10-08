import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestScriptRequestMethodCodeEnum } from './R4_1_TestScriptRequestMethodCodeEnum'
import { R4_1_TestScript_RequestHeader } from './R4_1_TestScript_RequestHeader'

export class R4_1_TestScript_Operation      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : R4_1_Coding ;
   resource : string ;
   label : string ;
   description : string ;
   accept : string ;
   contentType : string ;
   destination : string ;
   encodeRequestUrl : boolean ;
   method : R4_1_TestScriptRequestMethodCodeEnum ;
   origin : string ;
   params : string ;
   requestHeader : R4_1_TestScript_RequestHeader [];
   requestId : string ;
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}

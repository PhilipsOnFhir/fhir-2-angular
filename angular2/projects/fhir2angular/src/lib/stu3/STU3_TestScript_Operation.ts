import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ContentTypeEnum } from './STU3_ContentTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FHIRDefinedTypeEnum } from './STU3_FHIRDefinedTypeEnum'
import { STU3_TestScript_RequestHeader } from './STU3_TestScript_RequestHeader'

export class STU3_TestScript_Operation      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Operation';
   type : STU3_Coding ;
   resource : STU3_FHIRDefinedTypeEnum ;
   label : string ;
   description : string ;
   accept : STU3_ContentTypeEnum ;
   contentType : STU3_ContentTypeEnum ;
   destination : string ;
   encodeRequestUrl : boolean ;
   origin : string ;
   params : string ;
   requestHeader : STU3_TestScript_RequestHeader [];
   requestId : string ;
   responseId : string ;
   sourceId : string ;
   targetId : string ;
   url : string ;
}

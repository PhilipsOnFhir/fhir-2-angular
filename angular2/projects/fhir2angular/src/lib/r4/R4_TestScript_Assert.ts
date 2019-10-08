import { R4_AssertionDirectionTypeEnum } from './R4_AssertionDirectionTypeEnum'
import { R4_AssertionOperatorTypeEnum } from './R4_AssertionOperatorTypeEnum'
import { R4_AssertionResponseTypesEnum } from './R4_AssertionResponseTypesEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScriptRequestMethodCodeEnum } from './R4_TestScriptRequestMethodCodeEnum'

export class R4_TestScript_Assert      extends R4_BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : R4_AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourceExpression : string ;
   compareToSourcePath : string ;
   contentType : string ;
   expression : string ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : boolean ;
   operator : R4_AssertionOperatorTypeEnum ;
   path : string ;
   requestMethod : R4_TestScriptRequestMethodCodeEnum ;
   requestURL : string ;
   resource : string ;
   response : R4_AssertionResponseTypesEnum ;
   responseCode : string ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : boolean ;
}

import { R5_AssertionDirectionTypeEnum } from './R5_AssertionDirectionTypeEnum'
import { R5_AssertionOperatorTypeEnum } from './R5_AssertionOperatorTypeEnum'
import { R5_AssertionResponseTypesEnum } from './R5_AssertionResponseTypesEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScriptRequestMethodCodeEnum } from './R5_TestScriptRequestMethodCodeEnum'

export class R5_TestScript_Assert      extends R5_BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : R5_AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourceExpression : string ;
   compareToSourcePath : string ;
   contentType : string ;
   expression : string ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : boolean ;
   operator : R5_AssertionOperatorTypeEnum ;
   path : string ;
   requestMethod : R5_TestScriptRequestMethodCodeEnum ;
   requestURL : string ;
   resource : string ;
   response : R5_AssertionResponseTypesEnum ;
   responseCode : string ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : boolean ;
}

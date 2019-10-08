import { R4_1_AssertionDirectionTypeEnum } from './R4_1_AssertionDirectionTypeEnum'
import { R4_1_AssertionOperatorTypeEnum } from './R4_1_AssertionOperatorTypeEnum'
import { R4_1_AssertionResponseTypesEnum } from './R4_1_AssertionResponseTypesEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestScriptRequestMethodCodeEnum } from './R4_1_TestScriptRequestMethodCodeEnum'

export class R4_1_TestScript_Assert      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : R4_1_AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourceExpression : string ;
   compareToSourcePath : string ;
   contentType : string ;
   expression : string ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : boolean ;
   operator : R4_1_AssertionOperatorTypeEnum ;
   path : string ;
   requestMethod : R4_1_TestScriptRequestMethodCodeEnum ;
   requestURL : string ;
   resource : string ;
   response : R4_1_AssertionResponseTypesEnum ;
   responseCode : string ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : boolean ;
}

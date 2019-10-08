import { STU3_AssertionDirectionTypeEnum } from './STU3_AssertionDirectionTypeEnum'
import { STU3_AssertionOperatorTypeEnum } from './STU3_AssertionOperatorTypeEnum'
import { STU3_AssertionResponseTypesEnum } from './STU3_AssertionResponseTypesEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ContentTypeEnum } from './STU3_ContentTypeEnum'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_FHIRDefinedTypeEnum } from './STU3_FHIRDefinedTypeEnum'
import { STU3_TestScriptRequestMethodCodeEnum } from './STU3_TestScriptRequestMethodCodeEnum'
import { STU3_TestScript_Rule2 } from './STU3_TestScript_Rule2'
import { STU3_TestScript_Ruleset1 } from './STU3_TestScript_Ruleset1'

export class STU3_TestScript_Assert      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Assert';
   label : string ;
   description : string ;
   direction : STU3_AssertionDirectionTypeEnum ;
   compareToSourceId : string ;
   compareToSourceExpression : string ;
   compareToSourcePath : string ;
   contentType : STU3_ContentTypeEnum ;
   expression : string ;
   headerField : string ;
   minimumId : string ;
   navigationLinks : boolean ;
   operator : STU3_AssertionOperatorTypeEnum ;
   path : string ;
   requestMethod : STU3_TestScriptRequestMethodCodeEnum ;
   requestURL : string ;
   resource : STU3_FHIRDefinedTypeEnum ;
   response : STU3_AssertionResponseTypesEnum ;
   responseCode : string ;
   rule : STU3_TestScript_Rule2 ;
   ruleset : STU3_TestScript_Ruleset1 ;
   sourceId : string ;
   validateProfileId : string ;
   value : string ;
   warningOnly : boolean ;
}

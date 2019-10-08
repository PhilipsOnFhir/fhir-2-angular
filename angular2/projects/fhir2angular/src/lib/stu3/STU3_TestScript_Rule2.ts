import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Param2 } from './STU3_TestScript_Param2'

export class STU3_TestScript_Rule2      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Rule2';
   ruleId : string ;
   param : STU3_TestScript_Param2 [];
}

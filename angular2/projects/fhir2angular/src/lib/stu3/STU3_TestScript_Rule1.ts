import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Param1 } from './STU3_TestScript_Param1'

export class STU3_TestScript_Rule1      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Rule1';
   ruleId : string ;
   param : STU3_TestScript_Param1 [];
}

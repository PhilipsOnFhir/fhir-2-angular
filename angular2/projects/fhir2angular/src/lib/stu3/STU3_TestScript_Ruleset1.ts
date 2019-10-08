import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Rule3 } from './STU3_TestScript_Rule3'

export class STU3_TestScript_Ruleset1      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Ruleset1';
   rulesetId : string ;
   rule : STU3_TestScript_Rule3 [];
}

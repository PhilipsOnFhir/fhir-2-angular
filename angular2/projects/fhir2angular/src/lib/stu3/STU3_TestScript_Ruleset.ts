import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_TestScript_Rule1 } from './STU3_TestScript_Rule1'

export class STU3_TestScript_Ruleset      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Ruleset';
   resource : STU3_Reference ;
   rule : STU3_TestScript_Rule1 [];
}

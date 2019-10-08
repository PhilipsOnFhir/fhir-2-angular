import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Action2 } from './STU3_TestScript_Action2'

export class STU3_TestScript_Teardown      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Teardown';
   action : STU3_TestScript_Action2 [];
}

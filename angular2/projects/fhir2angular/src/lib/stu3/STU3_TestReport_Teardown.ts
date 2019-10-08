import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReport_Action2 } from './STU3_TestReport_Action2'

export class STU3_TestReport_Teardown      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Teardown';
   action : STU3_TestReport_Action2 [];
}

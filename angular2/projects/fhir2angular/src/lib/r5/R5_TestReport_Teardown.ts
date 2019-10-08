import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestReport_Action2 } from './R5_TestReport_Action2'

export class R5_TestReport_Teardown      extends R5_BackboneElement
{

   static def : string = 'TestReport_Teardown';
   action : R5_TestReport_Action2 [];
}

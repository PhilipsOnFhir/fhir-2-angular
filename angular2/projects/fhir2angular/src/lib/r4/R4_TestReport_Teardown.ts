import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReport_Action2 } from './R4_TestReport_Action2'

export class R4_TestReport_Teardown      extends R4_BackboneElement
{

   static def : string = 'TestReport_Teardown';
   action : R4_TestReport_Action2 [];
}

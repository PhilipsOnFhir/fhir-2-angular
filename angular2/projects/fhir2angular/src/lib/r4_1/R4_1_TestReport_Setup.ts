import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestReport_Action } from './R4_1_TestReport_Action'

export class R4_1_TestReport_Setup      extends R4_1_BackboneElement
{

   static def : string = 'TestReport_Setup';
   action : R4_1_TestReport_Action [];
}

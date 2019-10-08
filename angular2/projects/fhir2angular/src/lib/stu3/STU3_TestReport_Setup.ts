import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReport_Action } from './STU3_TestReport_Action'

export class STU3_TestReport_Setup      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Setup';
   action : STU3_TestReport_Action [];
}

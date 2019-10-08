import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestReport_Action } from './R5_TestReport_Action'

export class R5_TestReport_Setup      extends R5_BackboneElement
{

   static def : string = 'TestReport_Setup';
   action : R5_TestReport_Action [];
}

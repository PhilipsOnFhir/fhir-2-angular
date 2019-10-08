import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReport_Action } from './R4_TestReport_Action'

export class R4_TestReport_Setup      extends R4_BackboneElement
{

   static def : string = 'TestReport_Setup';
   action : R4_TestReport_Action [];
}

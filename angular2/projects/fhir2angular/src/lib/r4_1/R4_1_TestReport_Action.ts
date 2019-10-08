import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestReport_Assert } from './R4_1_TestReport_Assert'
import { R4_1_TestReport_Operation } from './R4_1_TestReport_Operation'

export class R4_1_TestReport_Action      extends R4_1_BackboneElement
{

   static def : string = 'TestReport_Action';
   operation : R4_1_TestReport_Operation ;
   assert : R4_1_TestReport_Assert ;
}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReport_Assert } from './STU3_TestReport_Assert'
import { STU3_TestReport_Operation } from './STU3_TestReport_Operation'

export class STU3_TestReport_Action      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Action';
   operation : STU3_TestReport_Operation ;
   assert : STU3_TestReport_Assert ;
}

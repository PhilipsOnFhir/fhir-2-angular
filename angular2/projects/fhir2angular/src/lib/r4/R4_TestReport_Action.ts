import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReport_Assert } from './R4_TestReport_Assert'
import { R4_TestReport_Operation } from './R4_TestReport_Operation'

export class R4_TestReport_Action      extends R4_BackboneElement
{

   static def : string = 'TestReport_Action';
   operation : R4_TestReport_Operation ;
   assert : R4_TestReport_Assert ;
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestReport_Assert } from './R5_TestReport_Assert'
import { R5_TestReport_Operation } from './R5_TestReport_Operation'

export class R5_TestReport_Action1      extends R5_BackboneElement
{

   static def : string = 'TestReport_Action1';
   operation : R5_TestReport_Operation ;
   assert : R5_TestReport_Assert ;
}

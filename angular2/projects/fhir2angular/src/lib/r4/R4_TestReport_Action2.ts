import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReport_Operation } from './R4_TestReport_Operation'

export class R4_TestReport_Action2      extends R4_BackboneElement
{

   static def : string = 'TestReport_Action2';
   operation : R4_TestReport_Operation ;
}

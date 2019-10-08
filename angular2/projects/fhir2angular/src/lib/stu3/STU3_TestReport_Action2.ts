import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReport_Operation } from './STU3_TestReport_Operation'

export class STU3_TestReport_Action2      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Action2';
   operation : STU3_TestReport_Operation ;
}

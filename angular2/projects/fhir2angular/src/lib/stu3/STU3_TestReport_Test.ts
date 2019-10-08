import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestReport_Action1 } from './STU3_TestReport_Action1'

export class STU3_TestReport_Test      extends STU3_BackboneElement
{

   static def : string = 'TestReport_Test';
   name : string ;
   description : string ;
   action : STU3_TestReport_Action1 [];
}

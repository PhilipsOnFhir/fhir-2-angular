import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestReport_Action1 } from './R4_1_TestReport_Action1'

export class R4_1_TestReport_Test      extends R4_1_BackboneElement
{

   static def : string = 'TestReport_Test';
   name : string ;
   description : string ;
   action : R4_1_TestReport_Action1 [];
}

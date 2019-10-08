import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestReport_Action1 } from './R5_TestReport_Action1'

export class R5_TestReport_Test      extends R5_BackboneElement
{

   static def : string = 'TestReport_Test';
   name : string ;
   description : string ;
   action : R5_TestReport_Action1 [];
}

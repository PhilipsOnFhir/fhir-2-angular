import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestReport_Action1 } from './R4_TestReport_Action1'

export class R4_TestReport_Test      extends R4_BackboneElement
{

   static def : string = 'TestReport_Test';
   name : string ;
   description : string ;
   action : R4_TestReport_Action1 [];
}

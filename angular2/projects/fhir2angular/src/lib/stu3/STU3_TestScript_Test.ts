import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Action1 } from './STU3_TestScript_Action1'

export class STU3_TestScript_Test      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Test';
   name : string ;
   description : string ;
   action : STU3_TestScript_Action1 [];
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScript_Action2 } from './R5_TestScript_Action2'

export class R5_TestScript_Teardown      extends R5_BackboneElement
{

   static def : string = 'TestScript_Teardown';
   action : R5_TestScript_Action2 [];
}

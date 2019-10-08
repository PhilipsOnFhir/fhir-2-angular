import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestScript_Action2 } from './R4_1_TestScript_Action2'

export class R4_1_TestScript_Teardown      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Teardown';
   action : R4_1_TestScript_Action2 [];
}

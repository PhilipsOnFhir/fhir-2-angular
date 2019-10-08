import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScript_Action2 } from './R4_TestScript_Action2'

export class R4_TestScript_Teardown      extends R4_BackboneElement
{

   static def : string = 'TestScript_Teardown';
   action : R4_TestScript_Action2 [];
}

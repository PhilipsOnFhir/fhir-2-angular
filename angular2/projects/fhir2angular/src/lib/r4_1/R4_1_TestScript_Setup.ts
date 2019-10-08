import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestScript_Action } from './R4_1_TestScript_Action'

export class R4_1_TestScript_Setup      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Setup';
   action : R4_1_TestScript_Action [];
}

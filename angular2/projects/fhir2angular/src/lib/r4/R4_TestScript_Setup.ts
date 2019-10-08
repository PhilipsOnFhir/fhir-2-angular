import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScript_Action } from './R4_TestScript_Action'

export class R4_TestScript_Setup      extends R4_BackboneElement
{

   static def : string = 'TestScript_Setup';
   action : R4_TestScript_Action [];
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScript_Action } from './R5_TestScript_Action'

export class R5_TestScript_Setup      extends R5_BackboneElement
{

   static def : string = 'TestScript_Setup';
   action : R5_TestScript_Action [];
}

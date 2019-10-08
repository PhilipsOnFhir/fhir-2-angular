import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Action } from './STU3_TestScript_Action'

export class STU3_TestScript_Setup      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Setup';
   action : STU3_TestScript_Action [];
}

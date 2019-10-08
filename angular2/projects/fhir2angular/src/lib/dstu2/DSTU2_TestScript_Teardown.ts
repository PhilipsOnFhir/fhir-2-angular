import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TestScript_Action2 } from './DSTU2_TestScript_Action2'

export class DSTU2_TestScript_Teardown      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Teardown';
   action : DSTU2_TestScript_Action2 [];
}

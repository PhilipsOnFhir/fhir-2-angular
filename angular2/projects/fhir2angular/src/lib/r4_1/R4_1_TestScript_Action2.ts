import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestScript_Operation } from './R4_1_TestScript_Operation'

export class R4_1_TestScript_Action2      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Action2';
   operation : R4_1_TestScript_Operation ;
}

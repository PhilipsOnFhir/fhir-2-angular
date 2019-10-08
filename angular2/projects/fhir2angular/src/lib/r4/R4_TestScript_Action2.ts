import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScript_Operation } from './R4_TestScript_Operation'

export class R4_TestScript_Action2      extends R4_BackboneElement
{

   static def : string = 'TestScript_Action2';
   operation : R4_TestScript_Operation ;
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScript_Operation } from './R5_TestScript_Operation'

export class R5_TestScript_Action2      extends R5_BackboneElement
{

   static def : string = 'TestScript_Action2';
   operation : R5_TestScript_Operation ;
}

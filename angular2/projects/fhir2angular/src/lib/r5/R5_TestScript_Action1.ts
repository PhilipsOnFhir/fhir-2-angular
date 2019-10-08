import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScript_Assert } from './R5_TestScript_Assert'
import { R5_TestScript_Operation } from './R5_TestScript_Operation'

export class R5_TestScript_Action1      extends R5_BackboneElement
{

   static def : string = 'TestScript_Action1';
   operation : R5_TestScript_Operation ;
   assert : R5_TestScript_Assert ;
}

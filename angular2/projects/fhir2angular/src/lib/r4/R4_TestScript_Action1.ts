import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScript_Assert } from './R4_TestScript_Assert'
import { R4_TestScript_Operation } from './R4_TestScript_Operation'

export class R4_TestScript_Action1      extends R4_BackboneElement
{

   static def : string = 'TestScript_Action1';
   operation : R4_TestScript_Operation ;
   assert : R4_TestScript_Assert ;
}

import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TestScript_Assert } from './DSTU2_TestScript_Assert'
import { DSTU2_TestScript_Operation } from './DSTU2_TestScript_Operation'

export class DSTU2_TestScript_Action1      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Action1';
   operation : DSTU2_TestScript_Operation ;
   assert : DSTU2_TestScript_Assert ;
}

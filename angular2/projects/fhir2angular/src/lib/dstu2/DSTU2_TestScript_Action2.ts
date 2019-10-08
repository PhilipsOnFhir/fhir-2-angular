import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TestScript_Operation } from './DSTU2_TestScript_Operation'

export class DSTU2_TestScript_Action2      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Action2';
   operation : DSTU2_TestScript_Operation ;
}

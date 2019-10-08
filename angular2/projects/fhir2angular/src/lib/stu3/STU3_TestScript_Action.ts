import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Assert } from './STU3_TestScript_Assert'
import { STU3_TestScript_Operation } from './STU3_TestScript_Operation'

export class STU3_TestScript_Action      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Action';
   operation : STU3_TestScript_Operation ;
   assert : STU3_TestScript_Assert ;
}

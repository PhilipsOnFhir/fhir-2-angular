import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Operation } from './STU3_TestScript_Operation'

export class STU3_TestScript_Action2      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Action2';
   operation : STU3_TestScript_Operation ;
}

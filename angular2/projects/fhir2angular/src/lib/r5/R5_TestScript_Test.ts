import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScript_Action1 } from './R5_TestScript_Action1'

export class R5_TestScript_Test      extends R5_BackboneElement
{

   static def : string = 'TestScript_Test';
   name : string ;
   description : string ;
   action : R5_TestScript_Action1 [];
}

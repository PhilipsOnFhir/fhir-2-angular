import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScript_Action1 } from './R4_TestScript_Action1'

export class R4_TestScript_Test      extends R4_BackboneElement
{

   static def : string = 'TestScript_Test';
   name : string ;
   description : string ;
   action : R4_TestScript_Action1 [];
}

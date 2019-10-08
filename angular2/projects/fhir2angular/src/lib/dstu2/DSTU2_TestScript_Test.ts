import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TestScript_Action1 } from './DSTU2_TestScript_Action1'
import { DSTU2_TestScript_Metadata } from './DSTU2_TestScript_Metadata'

export class DSTU2_TestScript_Test      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Test';
   name : string ;
   description : string ;
   metadata : DSTU2_TestScript_Metadata ;
   action : DSTU2_TestScript_Action1 [];
}

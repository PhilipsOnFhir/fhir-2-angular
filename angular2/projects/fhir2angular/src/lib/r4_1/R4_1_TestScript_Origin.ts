import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_TestScript_Origin      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Origin';
   index : string ;
   profile : R4_1_Coding ;
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_TestScript_Origin      extends R4_BackboneElement
{

   static def : string = 'TestScript_Origin';
   index : string ;
   profile : R4_Coding ;
}

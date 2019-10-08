import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_Coding } from './R4_Coding'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_TestScript_Destination      extends R4_BackboneElement
{

   static def : string = 'TestScript_Destination';
   index : string ;
   profile : R4_Coding ;
}

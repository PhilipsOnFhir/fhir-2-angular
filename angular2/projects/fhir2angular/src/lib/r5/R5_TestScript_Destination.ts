import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_Coding } from './R5_Coding'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_TestScript_Destination      extends R5_BackboneElement
{

   static def : string = 'TestScript_Destination';
   index : string ;
   profile : R5_Coding ;
}

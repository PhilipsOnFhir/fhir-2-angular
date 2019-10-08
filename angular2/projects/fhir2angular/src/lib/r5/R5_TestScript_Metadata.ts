import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_TestScript_Capability } from './R5_TestScript_Capability'
import { R5_TestScript_Link } from './R5_TestScript_Link'

export class R5_TestScript_Metadata      extends R5_BackboneElement
{

   static def : string = 'TestScript_Metadata';
   link : R5_TestScript_Link [];
   capability : R5_TestScript_Capability [];
}

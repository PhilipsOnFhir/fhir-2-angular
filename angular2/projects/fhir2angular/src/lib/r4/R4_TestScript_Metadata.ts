import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_TestScript_Capability } from './R4_TestScript_Capability'
import { R4_TestScript_Link } from './R4_TestScript_Link'

export class R4_TestScript_Metadata      extends R4_BackboneElement
{

   static def : string = 'TestScript_Metadata';
   link : R4_TestScript_Link [];
   capability : R4_TestScript_Capability [];
}

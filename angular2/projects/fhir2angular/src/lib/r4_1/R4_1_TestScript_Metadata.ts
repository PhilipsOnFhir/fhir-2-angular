import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_TestScript_Capability } from './R4_1_TestScript_Capability'
import { R4_1_TestScript_Link } from './R4_1_TestScript_Link'

export class R4_1_TestScript_Metadata      extends R4_1_BackboneElement
{

   static def : string = 'TestScript_Metadata';
   link : R4_1_TestScript_Link [];
   capability : R4_1_TestScript_Capability [];
}

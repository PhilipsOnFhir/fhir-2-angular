import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_TestScript_Capability } from './STU3_TestScript_Capability'
import { STU3_TestScript_Link } from './STU3_TestScript_Link'

export class STU3_TestScript_Metadata      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Metadata';
   link : STU3_TestScript_Link [];
   capability : STU3_TestScript_Capability [];
}

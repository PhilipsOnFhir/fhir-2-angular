import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_TestScript_Capability } from './DSTU2_TestScript_Capability'
import { DSTU2_TestScript_Link } from './DSTU2_TestScript_Link'

export class DSTU2_TestScript_Metadata      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Metadata';
   link : DSTU2_TestScript_Link [];
   capability : DSTU2_TestScript_Capability [];
}

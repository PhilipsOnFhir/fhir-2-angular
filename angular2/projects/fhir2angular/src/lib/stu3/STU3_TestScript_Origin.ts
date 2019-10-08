import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_TestScript_Origin      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Origin';
   index : string ;
   profile : STU3_Coding ;
}

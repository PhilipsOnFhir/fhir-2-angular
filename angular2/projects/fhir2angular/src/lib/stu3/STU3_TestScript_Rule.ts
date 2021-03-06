import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'
import { STU3_TestScript_Param } from './STU3_TestScript_Param'

export class STU3_TestScript_Rule      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Rule';
   resource : STU3_Reference ;
   param : STU3_TestScript_Param [];
}

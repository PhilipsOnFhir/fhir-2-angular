import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ConditionDefinition_Contact      extends STU3_BackboneElement
{

   static def : string = 'ConditionDefinition_Contact';
   name : string ;
   telecom : STU3_ContactPoint [];
}

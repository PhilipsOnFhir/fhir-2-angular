import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_TestScript_Contact      extends R4_BackboneElement
{

   static def : string = 'TestScript_Contact';
   name : string ;
   telecom : R4_ContactPoint [];
}

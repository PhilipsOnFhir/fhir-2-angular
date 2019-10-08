import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_ContactPoint } from './STU3_ContactPoint'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_MessageHeader_Source      extends STU3_BackboneElement
{

   static def : string = 'MessageHeader_Source';
   name : string ;
   software : string ;
   version : string ;
   contact : STU3_ContactPoint ;
   endpoint : string ;
}

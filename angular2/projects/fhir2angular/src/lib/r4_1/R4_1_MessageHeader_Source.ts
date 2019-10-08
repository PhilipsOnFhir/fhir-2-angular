import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_ContactPoint } from './R4_1_ContactPoint'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MessageHeader_Source      extends R4_1_BackboneElement
{

   static def : string = 'MessageHeader_Source';
   name : string ;
   software : string ;
   version : string ;
   contact : R4_1_ContactPoint ;
   endpoint : string ;
}

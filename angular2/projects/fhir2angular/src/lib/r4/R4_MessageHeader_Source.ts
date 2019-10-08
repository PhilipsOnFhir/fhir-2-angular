import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_ContactPoint } from './R4_ContactPoint'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MessageHeader_Source      extends R4_BackboneElement
{

   static def : string = 'MessageHeader_Source';
   name : string ;
   software : string ;
   version : string ;
   contact : R4_ContactPoint ;
   endpoint : string ;
}

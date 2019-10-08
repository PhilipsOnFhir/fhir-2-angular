import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_ContactPoint } from './R5_ContactPoint'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MessageHeader_Source      extends R5_BackboneElement
{

   static def : string = 'MessageHeader_Source';
   name : string ;
   software : string ;
   version : string ;
   contact : R5_ContactPoint ;
   endpoint : string ;
}

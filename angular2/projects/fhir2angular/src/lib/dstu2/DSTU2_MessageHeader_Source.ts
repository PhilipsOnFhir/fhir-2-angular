import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_MessageHeader_Source      extends DSTU2_BackboneElement
{

   static def : string = 'MessageHeader_Source';
   name : string ;
   software : string ;
   version : string ;
   contact : DSTU2_ContactPoint ;
   endpoint : string ;
}

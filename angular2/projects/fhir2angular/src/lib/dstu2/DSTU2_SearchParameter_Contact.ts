import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_SearchParameter_Contact      extends DSTU2_BackboneElement
{

   static def : string = 'SearchParameter_Contact';
   name : string ;
   telecom : DSTU2_ContactPoint [];
}

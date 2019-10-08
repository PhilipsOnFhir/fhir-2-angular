import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_ContactPoint } from './DSTU2_ContactPoint'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_ValueSet_Contact      extends DSTU2_BackboneElement
{

   static def : string = 'ValueSet_Contact';
   name : string ;
   telecom : DSTU2_ContactPoint [];
}

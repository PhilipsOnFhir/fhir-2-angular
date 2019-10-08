import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Conformance_Endpoint      extends DSTU2_BackboneElement
{

   static def : string = 'Conformance_Endpoint';
   protocol : DSTU2_Coding ;
   address : string ;
}

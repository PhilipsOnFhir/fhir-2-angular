import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Bundle_Link      extends DSTU2_BackboneElement
{

   static def : string = 'Bundle_Link';
   relation : string ;
   url : string ;
}

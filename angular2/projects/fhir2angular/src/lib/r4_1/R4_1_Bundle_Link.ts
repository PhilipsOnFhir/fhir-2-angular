import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_Bundle_Link      extends R4_1_BackboneElement
{

   static def : string = 'Bundle_Link';
   relation : string ;
   url : string ;
}

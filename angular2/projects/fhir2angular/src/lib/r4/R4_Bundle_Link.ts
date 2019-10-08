import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Bundle_Link      extends R4_BackboneElement
{

   static def : string = 'Bundle_Link';
   relation : string ;
   url : string ;
}

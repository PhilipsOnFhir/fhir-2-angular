import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_Bundle_Link      extends R5_BackboneElement
{

   static def : string = 'Bundle_Link';
   relation : string ;
   url : string ;
}

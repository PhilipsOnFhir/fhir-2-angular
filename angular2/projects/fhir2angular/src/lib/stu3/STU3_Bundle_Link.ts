import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Bundle_Link      extends STU3_BackboneElement
{

   static def : string = 'Bundle_Link';
   relation : string ;
   url : string ;
}

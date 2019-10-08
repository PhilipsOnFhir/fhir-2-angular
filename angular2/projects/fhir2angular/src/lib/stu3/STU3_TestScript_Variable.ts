import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_TestScript_Variable      extends STU3_BackboneElement
{

   static def : string = 'TestScript_Variable';
   name : string ;
   defaultValue : string ;
   description : string ;
   expression : string ;
   headerField : string ;
   hint : string ;
   path : string ;
   sourceId : string ;
}

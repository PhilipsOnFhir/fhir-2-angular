import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_TestScript_Variable      extends R4_1_BackboneElement
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

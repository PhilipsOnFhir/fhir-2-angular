import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_TestScript_Variable      extends R4_BackboneElement
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

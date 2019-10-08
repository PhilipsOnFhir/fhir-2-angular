import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_TestScript_Variable      extends R5_BackboneElement
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

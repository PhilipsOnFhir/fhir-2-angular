import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_TestScript_Variable      extends DSTU2_BackboneElement
{

   static def : string = 'TestScript_Variable';
   name : string ;
   headerField : string ;
   path : string ;
   sourceId : string ;
}

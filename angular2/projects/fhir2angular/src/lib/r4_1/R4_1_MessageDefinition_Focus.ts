import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_MessageDefinition_Focus      extends R4_1_BackboneElement
{

   static def : string = 'MessageDefinition_Focus';
   code : string ;
   profile : string ;
   min : string ;
   max : string ;
}

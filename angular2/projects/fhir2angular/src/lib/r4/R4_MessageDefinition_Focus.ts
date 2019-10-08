import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_MessageDefinition_Focus      extends R4_BackboneElement
{

   static def : string = 'MessageDefinition_Focus';
   code : string ;
   profile : string ;
   min : string ;
   max : string ;
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_MessageDefinition_Focus      extends R5_BackboneElement
{

   static def : string = 'MessageDefinition_Focus';
   code : string ;
   profile : string ;
   min : string ;
   max : string ;
}

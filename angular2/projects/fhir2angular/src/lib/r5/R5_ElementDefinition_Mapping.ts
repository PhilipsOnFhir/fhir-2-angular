import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ElementDefinition_Mapping      extends R5_BackboneElement
{

   static def : string = 'ElementDefinition_Mapping';
   identity : string ;
   language : string ;
   map : string ;
   comment : string ;
}

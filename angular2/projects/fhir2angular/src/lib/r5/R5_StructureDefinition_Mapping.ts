import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_StructureDefinition_Mapping      extends R5_BackboneElement
{

   static def : string = 'StructureDefinition_Mapping';
   identity : string ;
   uri : string ;
   name : string ;
   comment : string ;
}

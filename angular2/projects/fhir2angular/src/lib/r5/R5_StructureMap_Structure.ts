import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_StructureMapModelModeEnum } from './R5_StructureMapModelModeEnum'

export class R5_StructureMap_Structure      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Structure';
   url : string ;
   mode : R5_StructureMapModelModeEnum ;
   alias : string ;
   documentation : string ;
}

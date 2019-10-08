import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_StructureMapModelModeEnum } from './R4_StructureMapModelModeEnum'

export class R4_StructureMap_Structure      extends R4_BackboneElement
{

   static def : string = 'StructureMap_Structure';
   url : string ;
   mode : R4_StructureMapModelModeEnum ;
   alias : string ;
   documentation : string ;
}

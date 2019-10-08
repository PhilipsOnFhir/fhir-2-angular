import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_StructureMapModelModeEnum } from './R4_1_StructureMapModelModeEnum'

export class R4_1_StructureMap_Structure      extends R4_1_BackboneElement
{

   static def : string = 'StructureMap_Structure';
   url : string ;
   mode : R4_1_StructureMapModelModeEnum ;
   alias : string ;
   documentation : string ;
}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_StructureMapModelModeEnum } from './STU3_StructureMapModelModeEnum'

export class STU3_StructureMap_Structure      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Structure';
   url : string ;
   mode : STU3_StructureMapModelModeEnum ;
   alias : string ;
   documentation : string ;
}

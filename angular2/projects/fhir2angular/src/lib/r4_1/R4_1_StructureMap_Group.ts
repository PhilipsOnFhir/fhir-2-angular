import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_StructureMapGroupTypeModeEnum } from './R4_1_StructureMapGroupTypeModeEnum'
import { R4_1_StructureMap_Input } from './R4_1_StructureMap_Input'
import { R4_1_StructureMap_Rule } from './R4_1_StructureMap_Rule'

export class R4_1_StructureMap_Group      extends R4_1_BackboneElement
{

   static def : string = 'StructureMap_Group';
   name : string ;
   extends : string ;
   typeMode : R4_1_StructureMapGroupTypeModeEnum ;
   documentation : string ;
   input : R4_1_StructureMap_Input [];
   rule : R4_1_StructureMap_Rule [];
}

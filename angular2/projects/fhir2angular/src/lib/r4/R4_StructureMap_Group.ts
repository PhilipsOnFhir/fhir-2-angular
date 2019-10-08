import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_StructureMapGroupTypeModeEnum } from './R4_StructureMapGroupTypeModeEnum'
import { R4_StructureMap_Input } from './R4_StructureMap_Input'
import { R4_StructureMap_Rule } from './R4_StructureMap_Rule'

export class R4_StructureMap_Group      extends R4_BackboneElement
{

   static def : string = 'StructureMap_Group';
   name : string ;
   extends : string ;
   typeMode : R4_StructureMapGroupTypeModeEnum ;
   documentation : string ;
   input : R4_StructureMap_Input [];
   rule : R4_StructureMap_Rule [];
}

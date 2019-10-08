import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_StructureMapGroupTypeModeEnum } from './R5_StructureMapGroupTypeModeEnum'
import { R5_StructureMap_Input } from './R5_StructureMap_Input'
import { R5_StructureMap_Rule } from './R5_StructureMap_Rule'

export class R5_StructureMap_Group      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Group';
   name : string ;
   extends : string ;
   typeMode : R5_StructureMapGroupTypeModeEnum ;
   documentation : string ;
   input : R5_StructureMap_Input [];
   rule : R5_StructureMap_Rule [];
}

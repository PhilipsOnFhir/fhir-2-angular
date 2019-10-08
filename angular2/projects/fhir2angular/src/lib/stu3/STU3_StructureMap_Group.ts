import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_StructureMapGroupTypeModeEnum } from './STU3_StructureMapGroupTypeModeEnum'
import { STU3_StructureMap_Input } from './STU3_StructureMap_Input'
import { STU3_StructureMap_Rule } from './STU3_StructureMap_Rule'

export class STU3_StructureMap_Group      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Group';
   name : string ;
   extends : string ;
   typeMode : STU3_StructureMapGroupTypeModeEnum ;
   documentation : string ;
   input : STU3_StructureMap_Input [];
   rule : STU3_StructureMap_Rule [];
}

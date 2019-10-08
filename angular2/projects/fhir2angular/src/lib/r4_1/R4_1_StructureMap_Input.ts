import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_StructureMapInputModeEnum } from './R4_1_StructureMapInputModeEnum'

export class R4_1_StructureMap_Input      extends R4_1_BackboneElement
{

   static def : string = 'StructureMap_Input';
   name : string ;
   type : string ;
   mode : R4_1_StructureMapInputModeEnum ;
   documentation : string ;
}

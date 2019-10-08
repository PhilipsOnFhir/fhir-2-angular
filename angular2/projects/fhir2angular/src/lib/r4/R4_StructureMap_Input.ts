import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_StructureMapInputModeEnum } from './R4_StructureMapInputModeEnum'

export class R4_StructureMap_Input      extends R4_BackboneElement
{

   static def : string = 'StructureMap_Input';
   name : string ;
   type : string ;
   mode : R4_StructureMapInputModeEnum ;
   documentation : string ;
}

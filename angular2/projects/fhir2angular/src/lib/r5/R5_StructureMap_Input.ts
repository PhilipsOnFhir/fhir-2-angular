import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_StructureMapInputModeEnum } from './R5_StructureMapInputModeEnum'

export class R5_StructureMap_Input      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Input';
   name : string ;
   type : string ;
   mode : R5_StructureMapInputModeEnum ;
   documentation : string ;
}

import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_StructureMapInputModeEnum } from './STU3_StructureMapInputModeEnum'

export class STU3_StructureMap_Input      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Input';
   name : string ;
   type : string ;
   mode : STU3_StructureMapInputModeEnum ;
   documentation : string ;
}

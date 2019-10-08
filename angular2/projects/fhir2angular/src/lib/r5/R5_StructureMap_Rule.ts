import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_StructureMap_Dependent } from './R5_StructureMap_Dependent'
import { R5_StructureMap_Source } from './R5_StructureMap_Source'
import { R5_StructureMap_Target } from './R5_StructureMap_Target'

export class R5_StructureMap_Rule      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Rule';
   name : string ;
   source : R5_StructureMap_Source [];
   target : R5_StructureMap_Target [];
   rule : R5_StructureMap_Rule [];
   dependent : R5_StructureMap_Dependent [];
   documentation : string ;
}

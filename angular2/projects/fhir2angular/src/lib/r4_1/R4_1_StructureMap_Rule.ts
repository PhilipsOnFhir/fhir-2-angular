import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_StructureMap_Dependent } from './R4_1_StructureMap_Dependent'
import { R4_1_StructureMap_Source } from './R4_1_StructureMap_Source'
import { R4_1_StructureMap_Target } from './R4_1_StructureMap_Target'

export class R4_1_StructureMap_Rule      extends R4_1_BackboneElement
{

   static def : string = 'StructureMap_Rule';
   name : string ;
   source : R4_1_StructureMap_Source [];
   target : R4_1_StructureMap_Target [];
   rule : R4_1_StructureMap_Rule [];
   dependent : R4_1_StructureMap_Dependent [];
   documentation : string ;
}

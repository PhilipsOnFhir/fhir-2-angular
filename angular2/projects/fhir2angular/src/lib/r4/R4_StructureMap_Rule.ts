import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_StructureMap_Dependent } from './R4_StructureMap_Dependent'
import { R4_StructureMap_Source } from './R4_StructureMap_Source'
import { R4_StructureMap_Target } from './R4_StructureMap_Target'

export class R4_StructureMap_Rule      extends R4_BackboneElement
{

   static def : string = 'StructureMap_Rule';
   name : string ;
   source : R4_StructureMap_Source [];
   target : R4_StructureMap_Target [];
   rule : R4_StructureMap_Rule [];
   dependent : R4_StructureMap_Dependent [];
   documentation : string ;
}

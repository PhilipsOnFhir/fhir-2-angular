import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_StructureMap_Dependent } from './STU3_StructureMap_Dependent'
import { STU3_StructureMap_Source } from './STU3_StructureMap_Source'
import { STU3_StructureMap_Target } from './STU3_StructureMap_Target'

export class STU3_StructureMap_Rule      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Rule';
   name : string ;
   source : STU3_StructureMap_Source [];
   target : STU3_StructureMap_Target [];
   rule : STU3_StructureMap_Rule [];
   dependent : STU3_StructureMap_Dependent [];
   documentation : string ;
}

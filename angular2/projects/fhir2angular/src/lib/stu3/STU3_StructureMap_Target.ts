import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_StructureMapContextTypeEnum } from './STU3_StructureMapContextTypeEnum'
import { STU3_StructureMapTargetListModeEnum } from './STU3_StructureMapTargetListModeEnum'
import { STU3_StructureMapTransformEnum } from './STU3_StructureMapTransformEnum'
import { STU3_StructureMap_Parameter } from './STU3_StructureMap_Parameter'

export class STU3_StructureMap_Target      extends STU3_BackboneElement
{

   static def : string = 'StructureMap_Target';
   context : string ;
   contextType : STU3_StructureMapContextTypeEnum ;
   element : string ;
   variable : string ;
   listMode : STU3_StructureMapTargetListModeEnum [];
   listRuleId : string ;
   transform : STU3_StructureMapTransformEnum ;
   parameter : STU3_StructureMap_Parameter [];
}

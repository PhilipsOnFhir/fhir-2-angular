import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_StructureMapContextTypeEnum } from './R4_1_StructureMapContextTypeEnum'
import { R4_1_StructureMapTargetListModeEnum } from './R4_1_StructureMapTargetListModeEnum'
import { R4_1_StructureMapTransformEnum } from './R4_1_StructureMapTransformEnum'
import { R4_1_StructureMap_Parameter } from './R4_1_StructureMap_Parameter'

export class R4_1_StructureMap_Target      extends R4_1_BackboneElement
{

   static def : string = 'StructureMap_Target';
   context : string ;
   contextType : R4_1_StructureMapContextTypeEnum ;
   element : string ;
   variable : string ;
   listMode : R4_1_StructureMapTargetListModeEnum [];
   listRuleId : string ;
   transform : R4_1_StructureMapTransformEnum ;
   parameter : R4_1_StructureMap_Parameter [];
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_StructureMapContextTypeEnum } from './R5_StructureMapContextTypeEnum'
import { R5_StructureMapTargetListModeEnum } from './R5_StructureMapTargetListModeEnum'
import { R5_StructureMapTransformEnum } from './R5_StructureMapTransformEnum'
import { R5_StructureMap_Parameter } from './R5_StructureMap_Parameter'

export class R5_StructureMap_Target      extends R5_BackboneElement
{

   static def : string = 'StructureMap_Target';
   context : string ;
   contextType : R5_StructureMapContextTypeEnum ;
   element : string ;
   variable : string ;
   listMode : R5_StructureMapTargetListModeEnum [];
   listRuleId : string ;
   transform : R5_StructureMapTransformEnum ;
   parameter : R5_StructureMap_Parameter [];
}

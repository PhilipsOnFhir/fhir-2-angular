import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_StructureMapContextTypeEnum } from './R4_StructureMapContextTypeEnum'
import { R4_StructureMapTargetListModeEnum } from './R4_StructureMapTargetListModeEnum'
import { R4_StructureMapTransformEnum } from './R4_StructureMapTransformEnum'
import { R4_StructureMap_Parameter } from './R4_StructureMap_Parameter'

export class R4_StructureMap_Target      extends R4_BackboneElement
{

   static def : string = 'StructureMap_Target';
   context : string ;
   contextType : R4_StructureMapContextTypeEnum ;
   element : string ;
   variable : string ;
   listMode : R4_StructureMapTargetListModeEnum [];
   listRuleId : string ;
   transform : R4_StructureMapTransformEnum ;
   parameter : R4_StructureMap_Parameter [];
}

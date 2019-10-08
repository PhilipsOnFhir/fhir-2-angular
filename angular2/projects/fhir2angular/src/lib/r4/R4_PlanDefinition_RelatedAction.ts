import { R4_ActionRelationshipTypeEnum } from './R4_ActionRelationshipTypeEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Range } from './R4_Range'

export class R4_PlanDefinition_RelatedAction      extends R4_BackboneElement
{

   static def : string = 'PlanDefinition_RelatedAction';
   actionId : string ;
   relationship : R4_ActionRelationshipTypeEnum ;
   offsetDuration : string ;
   offsetRange : R4_Range ;
}

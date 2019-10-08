import { R4_1_ActionRelationshipTypeEnum } from './R4_1_ActionRelationshipTypeEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_RequestGroup_RelatedAction      extends R4_1_BackboneElement
{

   static def : string = 'RequestGroup_RelatedAction';
   actionId : string ;
   relationship : R4_1_ActionRelationshipTypeEnum ;
   offsetDuration : string ;
   offsetRange : R4_1_Range ;
}

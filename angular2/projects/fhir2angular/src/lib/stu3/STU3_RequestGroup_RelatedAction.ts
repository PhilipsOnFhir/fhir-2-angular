import { STU3_ActionRelationshipTypeEnum } from './STU3_ActionRelationshipTypeEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Range } from './STU3_Range'

export class STU3_RequestGroup_RelatedAction      extends STU3_BackboneElement
{

   static def : string = 'RequestGroup_RelatedAction';
   actionId : string ;
   relationship : STU3_ActionRelationshipTypeEnum ;
   offsetDuration : string ;
   offsetRange : STU3_Range ;
}

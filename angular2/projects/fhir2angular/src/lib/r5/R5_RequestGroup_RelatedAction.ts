import { R5_ActionRelationshipTypeEnum } from './R5_ActionRelationshipTypeEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Range } from './R5_Range'

export class R5_RequestGroup_RelatedAction      extends R5_BackboneElement
{

   static def : string = 'RequestGroup_RelatedAction';
   actionId : string ;
   relationship : R5_ActionRelationshipTypeEnum ;
   offsetDuration : string ;
   offsetRange : R5_Range ;
}

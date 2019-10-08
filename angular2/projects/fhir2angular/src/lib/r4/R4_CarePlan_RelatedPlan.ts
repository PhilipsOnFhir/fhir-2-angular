import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CarePlanRelationshipEnum } from './R4_CarePlanRelationshipEnum'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_CarePlan_RelatedPlan      extends R4_BackboneElement
{

   static def : string = 'CarePlan_RelatedPlan';
   code : R4_CarePlanRelationshipEnum ;
   plan : R4_Reference ;
}

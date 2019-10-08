import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CarePlanRelationshipEnum } from './DSTU2_CarePlanRelationshipEnum'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_CarePlan_RelatedPlan      extends DSTU2_BackboneElement
{

   static def : string = 'CarePlan_RelatedPlan';
   code : DSTU2_CarePlanRelationshipEnum ;
   plan : DSTU2_Reference ;
}

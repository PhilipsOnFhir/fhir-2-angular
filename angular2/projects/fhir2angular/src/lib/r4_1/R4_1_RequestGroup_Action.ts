import { R4_1_ActionCardinalityBehaviorEnum } from './R4_1_ActionCardinalityBehaviorEnum'
import { R4_1_ActionGroupingBehaviorEnum } from './R4_1_ActionGroupingBehaviorEnum'
import { R4_1_ActionPrecheckBehaviorEnum } from './R4_1_ActionPrecheckBehaviorEnum'
import { R4_1_ActionRequiredBehaviorEnum } from './R4_1_ActionRequiredBehaviorEnum'
import { R4_1_ActionSelectionBehaviorEnum } from './R4_1_ActionSelectionBehaviorEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_RequestGroup_Condition } from './R4_1_RequestGroup_Condition'
import { R4_1_RequestGroup_RelatedAction } from './R4_1_RequestGroup_RelatedAction'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_Timing } from './R4_1_Timing'

export class R4_1_RequestGroup_Action      extends R4_1_BackboneElement
{

   static def : string = 'RequestGroup_Action';
   prefix : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   priority : R4_1_RequestPriorityEnum ;
   code : R4_1_CodeableConcept [];
   documentation : R4_1_RelatedArtifact [];
   condition : R4_1_RequestGroup_Condition [];
   relatedAction : R4_1_RequestGroup_RelatedAction [];
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R4_1_Period ;
   timingDuration : string ;
   timingRange : R4_1_Range ;
   timingTiming : R4_1_Timing ;
   participant : R4_1_Reference [];
   type : R4_1_CodeableConcept ;
   groupingBehavior : R4_1_ActionGroupingBehaviorEnum ;
   selectionBehavior : R4_1_ActionSelectionBehaviorEnum ;
   requiredBehavior : R4_1_ActionRequiredBehaviorEnum ;
   precheckBehavior : R4_1_ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : R4_1_ActionCardinalityBehaviorEnum ;
   resource : R4_1_Reference ;
   action : R4_1_RequestGroup_Action [];
}

import { R4_ActionCardinalityBehaviorEnum } from './R4_ActionCardinalityBehaviorEnum'
import { R4_ActionGroupingBehaviorEnum } from './R4_ActionGroupingBehaviorEnum'
import { R4_ActionPrecheckBehaviorEnum } from './R4_ActionPrecheckBehaviorEnum'
import { R4_ActionRequiredBehaviorEnum } from './R4_ActionRequiredBehaviorEnum'
import { R4_ActionSelectionBehaviorEnum } from './R4_ActionSelectionBehaviorEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_RequestGroup_Condition } from './R4_RequestGroup_Condition'
import { R4_RequestGroup_RelatedAction } from './R4_RequestGroup_RelatedAction'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_Timing } from './R4_Timing'

export class R4_RequestGroup_Action      extends R4_BackboneElement
{

   static def : string = 'RequestGroup_Action';
   prefix : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   priority : R4_RequestPriorityEnum ;
   code : R4_CodeableConcept [];
   documentation : R4_RelatedArtifact [];
   condition : R4_RequestGroup_Condition [];
   relatedAction : R4_RequestGroup_RelatedAction [];
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R4_Period ;
   timingDuration : string ;
   timingRange : R4_Range ;
   timingTiming : R4_Timing ;
   participant : R4_Reference [];
   type : R4_CodeableConcept ;
   groupingBehavior : R4_ActionGroupingBehaviorEnum ;
   selectionBehavior : R4_ActionSelectionBehaviorEnum ;
   requiredBehavior : R4_ActionRequiredBehaviorEnum ;
   precheckBehavior : R4_ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : R4_ActionCardinalityBehaviorEnum ;
   resource : R4_Reference ;
   action : R4_RequestGroup_Action [];
}

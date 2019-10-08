import { R4_1_ActionCardinalityBehaviorEnum } from './R4_1_ActionCardinalityBehaviorEnum'
import { R4_1_ActionGroupingBehaviorEnum } from './R4_1_ActionGroupingBehaviorEnum'
import { R4_1_ActionPrecheckBehaviorEnum } from './R4_1_ActionPrecheckBehaviorEnum'
import { R4_1_ActionRequiredBehaviorEnum } from './R4_1_ActionRequiredBehaviorEnum'
import { R4_1_ActionSelectionBehaviorEnum } from './R4_1_ActionSelectionBehaviorEnum'
import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PlanDefinition_Condition } from './R4_1_PlanDefinition_Condition'
import { R4_1_PlanDefinition_DynamicValue } from './R4_1_PlanDefinition_DynamicValue'
import { R4_1_PlanDefinition_Participant } from './R4_1_PlanDefinition_Participant'
import { R4_1_PlanDefinition_RelatedAction } from './R4_1_PlanDefinition_RelatedAction'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_TriggerDefinition } from './R4_1_TriggerDefinition'

export class R4_1_PlanDefinition_Action      extends R4_1_BackboneElement
{

   static def : string = 'PlanDefinition_Action';
   prefix : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   priority : R4_1_RequestPriorityEnum ;
   code : R4_1_CodeableConcept [];
   reason : R4_1_CodeableConcept [];
   documentation : R4_1_RelatedArtifact [];
   goalId : string [];
   subjectCodeableConcept : R4_1_CodeableConcept ;
   subjectReference : R4_1_Reference ;
   trigger : R4_1_TriggerDefinition [];
   condition : R4_1_PlanDefinition_Condition [];
   input : R4_1_DataRequirement [];
   output : R4_1_DataRequirement [];
   relatedAction : R4_1_PlanDefinition_RelatedAction [];
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R4_1_Period ;
   timingDuration : string ;
   timingRange : R4_1_Range ;
   timingTiming : R4_1_Timing ;
   participant : R4_1_PlanDefinition_Participant [];
   type : R4_1_CodeableConcept ;
   groupingBehavior : R4_1_ActionGroupingBehaviorEnum ;
   selectionBehavior : R4_1_ActionSelectionBehaviorEnum ;
   requiredBehavior : R4_1_ActionRequiredBehaviorEnum ;
   precheckBehavior : R4_1_ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : R4_1_ActionCardinalityBehaviorEnum ;
   definitionCanonical : string ;
   definitionUri : string ;
   transform : string ;
   dynamicValue : R4_1_PlanDefinition_DynamicValue [];
   action : R4_1_PlanDefinition_Action [];
}

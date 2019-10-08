import { R5_ActionCardinalityBehaviorEnum } from './R5_ActionCardinalityBehaviorEnum'
import { R5_ActionGroupingBehaviorEnum } from './R5_ActionGroupingBehaviorEnum'
import { R5_ActionPrecheckBehaviorEnum } from './R5_ActionPrecheckBehaviorEnum'
import { R5_ActionRequiredBehaviorEnum } from './R5_ActionRequiredBehaviorEnum'
import { R5_ActionSelectionBehaviorEnum } from './R5_ActionSelectionBehaviorEnum'
import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_PlanDefinition_Condition } from './R5_PlanDefinition_Condition'
import { R5_PlanDefinition_DynamicValue } from './R5_PlanDefinition_DynamicValue'
import { R5_PlanDefinition_Participant } from './R5_PlanDefinition_Participant'
import { R5_PlanDefinition_RelatedAction } from './R5_PlanDefinition_RelatedAction'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_Timing } from './R5_Timing'
import { R5_TriggerDefinition } from './R5_TriggerDefinition'

export class R5_PlanDefinition_Action      extends R5_BackboneElement
{

   static def : string = 'PlanDefinition_Action';
   prefix : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   priority : R5_RequestPriorityEnum ;
   code : R5_CodeableConcept [];
   reason : R5_CodeableConcept [];
   documentation : R5_RelatedArtifact [];
   goalId : string [];
   subjectCodeableConcept : R5_CodeableConcept ;
   subjectReference : R5_Reference ;
   trigger : R5_TriggerDefinition [];
   condition : R5_PlanDefinition_Condition [];
   input : R5_DataRequirement [];
   output : R5_DataRequirement [];
   relatedAction : R5_PlanDefinition_RelatedAction [];
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R5_Period ;
   timingDuration : string ;
   timingRange : R5_Range ;
   timingTiming : R5_Timing ;
   participant : R5_PlanDefinition_Participant [];
   type : R5_CodeableConcept ;
   groupingBehavior : R5_ActionGroupingBehaviorEnum ;
   selectionBehavior : R5_ActionSelectionBehaviorEnum ;
   requiredBehavior : R5_ActionRequiredBehaviorEnum ;
   precheckBehavior : R5_ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : R5_ActionCardinalityBehaviorEnum ;
   definitionCanonical : string ;
   definitionUri : string ;
   transform : string ;
   dynamicValue : R5_PlanDefinition_DynamicValue [];
   action : R5_PlanDefinition_Action [];
}

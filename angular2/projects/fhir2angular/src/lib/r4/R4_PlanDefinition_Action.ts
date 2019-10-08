import { R4_ActionCardinalityBehaviorEnum } from './R4_ActionCardinalityBehaviorEnum'
import { R4_ActionGroupingBehaviorEnum } from './R4_ActionGroupingBehaviorEnum'
import { R4_ActionPrecheckBehaviorEnum } from './R4_ActionPrecheckBehaviorEnum'
import { R4_ActionRequiredBehaviorEnum } from './R4_ActionRequiredBehaviorEnum'
import { R4_ActionSelectionBehaviorEnum } from './R4_ActionSelectionBehaviorEnum'
import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_PlanDefinition_Condition } from './R4_PlanDefinition_Condition'
import { R4_PlanDefinition_DynamicValue } from './R4_PlanDefinition_DynamicValue'
import { R4_PlanDefinition_Participant } from './R4_PlanDefinition_Participant'
import { R4_PlanDefinition_RelatedAction } from './R4_PlanDefinition_RelatedAction'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_Timing } from './R4_Timing'
import { R4_TriggerDefinition } from './R4_TriggerDefinition'

export class R4_PlanDefinition_Action      extends R4_BackboneElement
{

   static def : string = 'PlanDefinition_Action';
   prefix : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   priority : R4_RequestPriorityEnum ;
   code : R4_CodeableConcept [];
   reason : R4_CodeableConcept [];
   documentation : R4_RelatedArtifact [];
   goalId : string [];
   subjectCodeableConcept : R4_CodeableConcept ;
   subjectReference : R4_Reference ;
   trigger : R4_TriggerDefinition [];
   condition : R4_PlanDefinition_Condition [];
   input : R4_DataRequirement [];
   output : R4_DataRequirement [];
   relatedAction : R4_PlanDefinition_RelatedAction [];
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R4_Period ;
   timingDuration : string ;
   timingRange : R4_Range ;
   timingTiming : R4_Timing ;
   participant : R4_PlanDefinition_Participant [];
   type : R4_CodeableConcept ;
   groupingBehavior : R4_ActionGroupingBehaviorEnum ;
   selectionBehavior : R4_ActionSelectionBehaviorEnum ;
   requiredBehavior : R4_ActionRequiredBehaviorEnum ;
   precheckBehavior : R4_ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : R4_ActionCardinalityBehaviorEnum ;
   definitionCanonical : string ;
   definitionUri : string ;
   transform : string ;
   dynamicValue : R4_PlanDefinition_DynamicValue [];
   action : R4_PlanDefinition_Action [];
}

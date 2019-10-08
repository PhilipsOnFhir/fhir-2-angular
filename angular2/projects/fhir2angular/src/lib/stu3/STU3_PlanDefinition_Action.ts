import { STU3_ActionCardinalityBehaviorEnum } from './STU3_ActionCardinalityBehaviorEnum'
import { STU3_ActionGroupingBehaviorEnum } from './STU3_ActionGroupingBehaviorEnum'
import { STU3_ActionPrecheckBehaviorEnum } from './STU3_ActionPrecheckBehaviorEnum'
import { STU3_ActionRequiredBehaviorEnum } from './STU3_ActionRequiredBehaviorEnum'
import { STU3_ActionSelectionBehaviorEnum } from './STU3_ActionSelectionBehaviorEnum'
import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_DataRequirement } from './STU3_DataRequirement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'
import { STU3_PlanDefinition_Condition } from './STU3_PlanDefinition_Condition'
import { STU3_PlanDefinition_DynamicValue } from './STU3_PlanDefinition_DynamicValue'
import { STU3_PlanDefinition_Participant } from './STU3_PlanDefinition_Participant'
import { STU3_PlanDefinition_RelatedAction } from './STU3_PlanDefinition_RelatedAction'
import { STU3_Range } from './STU3_Range'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'
import { STU3_Timing } from './STU3_Timing'
import { STU3_TriggerDefinition } from './STU3_TriggerDefinition'

export class STU3_PlanDefinition_Action      extends STU3_BackboneElement
{

   static def : string = 'PlanDefinition_Action';
   label : string ;
   title : string ;
   description : string ;
   textEquivalent : string ;
   code : STU3_CodeableConcept [];
   reason : STU3_CodeableConcept [];
   documentation : STU3_RelatedArtifact [];
   goalId : string [];
   triggerDefinition : STU3_TriggerDefinition [];
   condition : STU3_PlanDefinition_Condition [];
   input : STU3_DataRequirement [];
   output : STU3_DataRequirement [];
   relatedAction : STU3_PlanDefinition_RelatedAction [];
   timingDateTime : string ;
   timingPeriod : STU3_Period ;
   timingDuration : string ;
   timingRange : STU3_Range ;
   timingTiming : STU3_Timing ;
   participant : STU3_PlanDefinition_Participant [];
   type : STU3_Coding ;
   groupingBehavior : STU3_ActionGroupingBehaviorEnum ;
   selectionBehavior : STU3_ActionSelectionBehaviorEnum ;
   requiredBehavior : STU3_ActionRequiredBehaviorEnum ;
   precheckBehavior : STU3_ActionPrecheckBehaviorEnum ;
   cardinalityBehavior : STU3_ActionCardinalityBehaviorEnum ;
   definition : STU3_Reference ;
   transform : STU3_Reference ;
   dynamicValue : STU3_PlanDefinition_DynamicValue [];
   action : STU3_PlanDefinition_Action [];
}

import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_GroupMeasureEnum } from './R4_1_GroupMeasureEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_TriggerDefinition } from './R4_1_TriggerDefinition'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_EvidenceVariable_Characteristic      extends R4_1_BackboneElement
{

   static def : string = 'EvidenceVariable_Characteristic';
   description : string ;
   definitionReference : R4_1_Reference ;
   definitionCanonical : string ;
   definitionCodeableConcept : R4_1_CodeableConcept ;
   definitionExpression : R4_1_Expression ;
   definitionDataRequirement : R4_1_DataRequirement ;
   definitionTriggerDefinition : R4_1_TriggerDefinition ;
   usageContext : R4_1_UsageContext [];
   exclude : boolean ;
   participantEffectiveDateTime : string ;
   participantEffectivePeriod : R4_1_Period ;
   participantEffectiveDuration : string ;
   participantEffectiveTiming : R4_1_Timing ;
   timeFromStart : string ;
   groupMeasure : R4_1_GroupMeasureEnum ;
}

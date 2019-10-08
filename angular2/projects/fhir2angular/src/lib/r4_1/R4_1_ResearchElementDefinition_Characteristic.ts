import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DataRequirement } from './R4_1_DataRequirement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Expression } from './R4_1_Expression'
import { R4_1_GroupMeasureEnum } from './R4_1_GroupMeasureEnum'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ResearchElementDefinition_Characteristic      extends R4_1_BackboneElement
{

   static def : string = 'ResearchElementDefinition_Characteristic';
   definitionCodeableConcept : R4_1_CodeableConcept ;
   definitionCanonical : string ;
   definitionExpression : R4_1_Expression ;
   definitionDataRequirement : R4_1_DataRequirement ;
   usageContext : R4_1_UsageContext [];
   exclude : boolean ;
   unitOfMeasure : R4_1_CodeableConcept ;
   studyEffectiveDescription : string ;
   studyEffectiveDateTime : string ;
   studyEffectivePeriod : R4_1_Period ;
   studyEffectiveDuration : string ;
   studyEffectiveTiming : R4_1_Timing ;
   studyEffectiveTimeFromStart : string ;
   studyEffectiveGroupMeasure : R4_1_GroupMeasureEnum ;
   participantEffectiveDescription : string ;
   participantEffectiveDateTime : string ;
   participantEffectivePeriod : R4_1_Period ;
   participantEffectiveDuration : string ;
   participantEffectiveTiming : R4_1_Timing ;
   participantEffectiveTimeFromStart : string ;
   participantEffectiveGroupMeasure : R4_1_GroupMeasureEnum ;
}

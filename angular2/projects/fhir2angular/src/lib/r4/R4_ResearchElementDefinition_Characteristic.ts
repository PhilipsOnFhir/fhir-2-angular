import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Expression } from './R4_Expression'
import { R4_GroupMeasureEnum } from './R4_GroupMeasureEnum'
import { R4_Period } from './R4_Period'
import { R4_Timing } from './R4_Timing'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ResearchElementDefinition_Characteristic      extends R4_BackboneElement
{

   static def : string = 'ResearchElementDefinition_Characteristic';
   definitionCodeableConcept : R4_CodeableConcept ;
   definitionCanonical : string ;
   definitionExpression : R4_Expression ;
   definitionDataRequirement : R4_DataRequirement ;
   usageContext : R4_UsageContext [];
   exclude : boolean ;
   unitOfMeasure : R4_CodeableConcept ;
   studyEffectiveDescription : string ;
   studyEffectiveDateTime : string ;
   studyEffectivePeriod : R4_Period ;
   studyEffectiveDuration : string ;
   studyEffectiveTiming : R4_Timing ;
   studyEffectiveTimeFromStart : string ;
   studyEffectiveGroupMeasure : R4_GroupMeasureEnum ;
   participantEffectiveDescription : string ;
   participantEffectiveDateTime : string ;
   participantEffectivePeriod : R4_Period ;
   participantEffectiveDuration : string ;
   participantEffectiveTiming : R4_Timing ;
   participantEffectiveTimeFromStart : string ;
   participantEffectiveGroupMeasure : R4_GroupMeasureEnum ;
}

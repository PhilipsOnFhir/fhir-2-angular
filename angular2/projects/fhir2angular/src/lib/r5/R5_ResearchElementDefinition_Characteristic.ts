import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Expression } from './R5_Expression'
import { R5_GroupMeasureEnum } from './R5_GroupMeasureEnum'
import { R5_Period } from './R5_Period'
import { R5_Timing } from './R5_Timing'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ResearchElementDefinition_Characteristic      extends R5_BackboneElement
{

   static def : string = 'ResearchElementDefinition_Characteristic';
   definitionCodeableConcept : R5_CodeableConcept ;
   definitionCanonical : string ;
   definitionExpression : R5_Expression ;
   definitionDataRequirement : R5_DataRequirement ;
   usageContext : R5_UsageContext [];
   exclude : boolean ;
   unitOfMeasure : R5_CodeableConcept ;
   studyEffectiveDescription : string ;
   studyEffectiveDateTime : string ;
   studyEffectivePeriod : R5_Period ;
   studyEffectiveDuration : string ;
   studyEffectiveTiming : R5_Timing ;
   studyEffectiveTimeFromStart : string ;
   studyEffectiveGroupMeasure : R5_GroupMeasureEnum ;
   participantEffectiveDescription : string ;
   participantEffectiveDateTime : string ;
   participantEffectivePeriod : R5_Period ;
   participantEffectiveDuration : string ;
   participantEffectiveTiming : R5_Timing ;
   participantEffectiveTimeFromStart : string ;
   participantEffectiveGroupMeasure : R5_GroupMeasureEnum ;
}

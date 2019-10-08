import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DataRequirement } from './R4_DataRequirement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Expression } from './R4_Expression'
import { R4_GroupMeasureEnum } from './R4_GroupMeasureEnum'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_Timing } from './R4_Timing'
import { R4_TriggerDefinition } from './R4_TriggerDefinition'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_EvidenceVariable_Characteristic      extends R4_BackboneElement
{

   static def : string = 'EvidenceVariable_Characteristic';
   description : string ;
   definitionReference : R4_Reference ;
   definitionCanonical : string ;
   definitionCodeableConcept : R4_CodeableConcept ;
   definitionExpression : R4_Expression ;
   definitionDataRequirement : R4_DataRequirement ;
   definitionTriggerDefinition : R4_TriggerDefinition ;
   usageContext : R4_UsageContext [];
   exclude : boolean ;
   participantEffectiveDateTime : string ;
   participantEffectivePeriod : R4_Period ;
   participantEffectiveDuration : string ;
   participantEffectiveTiming : R4_Timing ;
   timeFromStart : string ;
   groupMeasure : R4_GroupMeasureEnum ;
}

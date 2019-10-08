import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DataRequirement } from './R5_DataRequirement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Expression } from './R5_Expression'
import { R5_GroupMeasureEnum } from './R5_GroupMeasureEnum'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_Timing } from './R5_Timing'
import { R5_TriggerDefinition } from './R5_TriggerDefinition'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_EvidenceVariable_Characteristic      extends R5_BackboneElement
{

   static def : string = 'EvidenceVariable_Characteristic';
   description : string ;
   definitionReference : R5_Reference ;
   definitionCanonical : string ;
   definitionCodeableConcept : R5_CodeableConcept ;
   definitionExpression : R5_Expression ;
   definitionDataRequirement : R5_DataRequirement ;
   definitionTriggerDefinition : R5_TriggerDefinition ;
   usageContext : R5_UsageContext [];
   exclude : boolean ;
   participantEffectiveDateTime : string ;
   participantEffectivePeriod : R5_Period ;
   participantEffectiveDuration : string ;
   participantEffectiveTiming : R5_Timing ;
   timeFromStart : string ;
   groupMeasure : R5_GroupMeasureEnum ;
}

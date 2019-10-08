import { R4_ActivityDefinition_DynamicValue } from './R4_ActivityDefinition_DynamicValue'
import { R4_ActivityDefinition_Participant } from './R4_ActivityDefinition_Participant'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Dosage } from './R4_Dosage'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_RequestIntentEnum } from './R4_RequestIntentEnum'
import { R4_RequestPriorityEnum } from './R4_RequestPriorityEnum'
import { R4_RequestResourceTypeEnum } from './R4_RequestResourceTypeEnum'
import { R4_Timing } from './R4_Timing'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ActivityDefinition      extends R4_DomainResource
{

   static def : string = 'ActivityDefinition';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R4_CodeableConcept ;
   subjectReference : R4_Reference ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   usage : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_Period ;
   topic : R4_CodeableConcept [];
   author : R4_ContactDetail [];
   editor : R4_ContactDetail [];
   reviewer : R4_ContactDetail [];
   endorser : R4_ContactDetail [];
   relatedArtifact : R4_RelatedArtifact [];
   library : string [];
   kind : R4_RequestResourceTypeEnum ;
   profile : string ;
   code : R4_CodeableConcept ;
   intent : R4_RequestIntentEnum ;
   priority : R4_RequestPriorityEnum ;
   doNotPerform : boolean ;
   timingTiming : R4_Timing ;
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R4_Period ;
   timingRange : R4_Range ;
   timingDuration : string ;
   location : R4_Reference ;
   participant : R4_ActivityDefinition_Participant [];
   productReference : R4_Reference ;
   productCodeableConcept : R4_CodeableConcept ;
   quantity : R4_Quantity ;
   dosage : R4_Dosage [];
   bodySite : R4_CodeableConcept [];
   specimenRequirement : R4_Reference [];
   observationRequirement : R4_Reference [];
   observationResultRequirement : R4_Reference [];
   transform : string ;
   dynamicValue : R4_ActivityDefinition_DynamicValue [];
}

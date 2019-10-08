import { R4_1_ActivityDefinition_DynamicValue } from './R4_1_ActivityDefinition_DynamicValue'
import { R4_1_ActivityDefinition_Participant } from './R4_1_ActivityDefinition_Participant'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Dosage } from './R4_1_Dosage'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_RequestIntentEnum } from './R4_1_RequestIntentEnum'
import { R4_1_RequestPriorityEnum } from './R4_1_RequestPriorityEnum'
import { R4_1_RequestResourceTypeEnum } from './R4_1_RequestResourceTypeEnum'
import { R4_1_Timing } from './R4_1_Timing'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ActivityDefinition      extends R4_1_DomainResource
{

   static def : string = 'ActivityDefinition';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R4_1_CodeableConcept ;
   subjectReference : R4_1_Reference ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   usage : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R4_1_Period ;
   topic : R4_1_CodeableConcept [];
   author : R4_1_ContactDetail [];
   editor : R4_1_ContactDetail [];
   reviewer : R4_1_ContactDetail [];
   endorser : R4_1_ContactDetail [];
   relatedArtifact : R4_1_RelatedArtifact [];
   library : string [];
   kind : R4_1_RequestResourceTypeEnum ;
   profile : string ;
   code : R4_1_CodeableConcept ;
   intent : R4_1_RequestIntentEnum ;
   priority : R4_1_RequestPriorityEnum ;
   doNotPerform : boolean ;
   timingTiming : R4_1_Timing ;
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R4_1_Period ;
   timingRange : R4_1_Range ;
   timingDuration : string ;
   location : R4_1_Reference ;
   participant : R4_1_ActivityDefinition_Participant [];
   productReference : R4_1_Reference ;
   productCodeableConcept : R4_1_CodeableConcept ;
   quantity : R4_1_Quantity ;
   dosage : R4_1_Dosage [];
   bodySite : R4_1_CodeableConcept [];
   specimenRequirement : R4_1_Reference [];
   observationRequirement : R4_1_Reference [];
   observationResultRequirement : R4_1_Reference [];
   transform : string ;
   dynamicValue : R4_1_ActivityDefinition_DynamicValue [];
}

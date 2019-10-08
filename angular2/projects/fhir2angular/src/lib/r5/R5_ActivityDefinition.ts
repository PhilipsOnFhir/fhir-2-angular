import { R5_ActivityDefinition_DynamicValue } from './R5_ActivityDefinition_DynamicValue'
import { R5_ActivityDefinition_Participant } from './R5_ActivityDefinition_Participant'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Dosage } from './R5_Dosage'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_RequestIntentEnum } from './R5_RequestIntentEnum'
import { R5_RequestPriorityEnum } from './R5_RequestPriorityEnum'
import { R5_RequestResourceTypeEnum } from './R5_RequestResourceTypeEnum'
import { R5_Timing } from './R5_Timing'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ActivityDefinition      extends R5_DomainResource
{

   static def : string = 'ActivityDefinition';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   subtitle : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   subjectCodeableConcept : R5_CodeableConcept ;
   subjectReference : R5_Reference ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   usage : string ;
   copyright : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : R5_Period ;
   topic : R5_CodeableConcept [];
   author : R5_ContactDetail [];
   editor : R5_ContactDetail [];
   reviewer : R5_ContactDetail [];
   endorser : R5_ContactDetail [];
   relatedArtifact : R5_RelatedArtifact [];
   library : string [];
   kind : R5_RequestResourceTypeEnum ;
   profile : string ;
   code : R5_CodeableConcept ;
   intent : R5_RequestIntentEnum ;
   priority : R5_RequestPriorityEnum ;
   doNotPerform : boolean ;
   timingTiming : R5_Timing ;
   timingDateTime : string ;
   timingAge : string ;
   timingPeriod : R5_Period ;
   timingRange : R5_Range ;
   timingDuration : string ;
   location : R5_Reference ;
   participant : R5_ActivityDefinition_Participant [];
   productReference : R5_Reference ;
   productCodeableConcept : R5_CodeableConcept ;
   quantity : R5_Quantity ;
   dosage : R5_Dosage [];
   bodySite : R5_CodeableConcept [];
   specimenRequirement : R5_Reference [];
   observationRequirement : R5_Reference [];
   observationResultRequirement : R5_Reference [];
   transform : string ;
   dynamicValue : R5_ActivityDefinition_DynamicValue [];
}

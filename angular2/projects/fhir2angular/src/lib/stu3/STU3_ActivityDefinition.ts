import { STU3_ActivityDefinition_DynamicValue } from './STU3_ActivityDefinition_DynamicValue'
import { STU3_ActivityDefinition_Participant } from './STU3_ActivityDefinition_Participant'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_Contributor } from './STU3_Contributor'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Dosage } from './STU3_Dosage'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'
import { STU3_Timing } from './STU3_Timing'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_ActivityDefinition      extends STU3_DomainResource
{

   static def : string = 'ActivityDefinition';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   description : string ;
   purpose : string ;
   usage : string ;
   approvalDate : string ;
   lastReviewDate : string ;
   effectivePeriod : STU3_Period ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   topic : STU3_CodeableConcept [];
   contributor : STU3_Contributor [];
   contact : STU3_ContactDetail [];
   copyright : string ;
   relatedArtifact : STU3_RelatedArtifact [];
   library : STU3_Reference [];
   kind : STU3_ResourceTypeEnum ;
   code : STU3_CodeableConcept ;
   timingTiming : STU3_Timing ;
   timingDateTime : string ;
   timingPeriod : STU3_Period ;
   timingRange : STU3_Range ;
   location : STU3_Reference ;
   participant : STU3_ActivityDefinition_Participant [];
   productReference : STU3_Reference ;
   productCodeableConcept : STU3_CodeableConcept ;
   quantity : STU3_Quantity ;
   dosage : STU3_Dosage [];
   bodySite : STU3_CodeableConcept [];
   transform : STU3_Reference ;
   dynamicValue : STU3_ActivityDefinition_DynamicValue [];
}

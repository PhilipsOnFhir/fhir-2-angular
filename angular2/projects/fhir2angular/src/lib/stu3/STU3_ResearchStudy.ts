import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'
import { STU3_RelatedArtifact } from './STU3_RelatedArtifact'
import { STU3_ResearchStudyStatusEnum } from './STU3_ResearchStudyStatusEnum'
import { STU3_ResearchStudy_Arm } from './STU3_ResearchStudy_Arm'

export class STU3_ResearchStudy      extends STU3_DomainResource
{

   static def : string = 'ResearchStudy';
   identifier : STU3_Identifier [];
   title : string ;
   protocol : STU3_Reference [];
   partOf : STU3_Reference [];
   status : STU3_ResearchStudyStatusEnum ;
   category : STU3_CodeableConcept [];
   focus : STU3_CodeableConcept [];
   contact : STU3_ContactDetail [];
   relatedArtifact : STU3_RelatedArtifact [];
   keyword : STU3_CodeableConcept [];
   jurisdiction : STU3_CodeableConcept [];
   description : string ;
   enrollment : STU3_Reference [];
   period : STU3_Period ;
   sponsor : STU3_Reference ;
   principalInvestigator : STU3_Reference ;
   site : STU3_Reference [];
   reasonStopped : STU3_CodeableConcept ;
   note : STU3_Annotation [];
   arm : STU3_ResearchStudy_Arm [];
}

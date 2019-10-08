import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_ResearchStudyStatusEnum } from './R4_1_ResearchStudyStatusEnum'
import { R4_1_ResearchStudy_Arm } from './R4_1_ResearchStudy_Arm'
import { R4_1_ResearchStudy_Objective } from './R4_1_ResearchStudy_Objective'

export class R4_1_ResearchStudy      extends R4_1_DomainResource
{

   static def : string = 'ResearchStudy';
   identifier : R4_1_Identifier [];
   title : string ;
   protocol : R4_1_Reference [];
   partOf : R4_1_Reference [];
   status : R4_1_ResearchStudyStatusEnum ;
   primaryPurposeType : R4_1_CodeableConcept ;
   phase : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   focus : R4_1_CodeableConcept [];
   condition : R4_1_CodeableConcept [];
   contact : R4_1_ContactDetail [];
   relatedArtifact : R4_1_RelatedArtifact [];
   keyword : R4_1_CodeableConcept [];
   location : R4_1_CodeableConcept [];
   description : string ;
   enrollment : R4_1_Reference [];
   period : R4_1_Period ;
   sponsor : R4_1_Reference ;
   principalInvestigator : R4_1_Reference ;
   site : R4_1_Reference [];
   reasonStopped : R4_1_CodeableConcept ;
   note : R4_1_Annotation [];
   arm : R4_1_ResearchStudy_Arm [];
   objective : R4_1_ResearchStudy_Objective [];
}

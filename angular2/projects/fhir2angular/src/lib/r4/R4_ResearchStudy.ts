import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_ResearchStudyStatusEnum } from './R4_ResearchStudyStatusEnum'
import { R4_ResearchStudy_Arm } from './R4_ResearchStudy_Arm'
import { R4_ResearchStudy_Objective } from './R4_ResearchStudy_Objective'

export class R4_ResearchStudy      extends R4_DomainResource
{

   static def : string = 'ResearchStudy';
   identifier : R4_Identifier [];
   title : string ;
   protocol : R4_Reference [];
   partOf : R4_Reference [];
   status : R4_ResearchStudyStatusEnum ;
   primaryPurposeType : R4_CodeableConcept ;
   phase : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   focus : R4_CodeableConcept [];
   condition : R4_CodeableConcept [];
   contact : R4_ContactDetail [];
   relatedArtifact : R4_RelatedArtifact [];
   keyword : R4_CodeableConcept [];
   location : R4_CodeableConcept [];
   description : string ;
   enrollment : R4_Reference [];
   period : R4_Period ;
   sponsor : R4_Reference ;
   principalInvestigator : R4_Reference ;
   site : R4_Reference [];
   reasonStopped : R4_CodeableConcept ;
   note : R4_Annotation [];
   arm : R4_ResearchStudy_Arm [];
   objective : R4_ResearchStudy_Objective [];
}

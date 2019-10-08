import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'
import { R5_RelatedArtifact } from './R5_RelatedArtifact'
import { R5_ResearchStudyStatusEnum } from './R5_ResearchStudyStatusEnum'
import { R5_ResearchStudy_Arm } from './R5_ResearchStudy_Arm'
import { R5_ResearchStudy_Objective } from './R5_ResearchStudy_Objective'

export class R5_ResearchStudy      extends R5_DomainResource
{

   static def : string = 'ResearchStudy';
   identifier : R5_Identifier [];
   title : string ;
   protocol : R5_Reference [];
   partOf : R5_Reference [];
   status : R5_ResearchStudyStatusEnum ;
   primaryPurposeType : R5_CodeableConcept ;
   phase : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   focus : R5_CodeableConcept [];
   condition : R5_CodeableConcept [];
   contact : R5_ContactDetail [];
   relatedArtifact : R5_RelatedArtifact [];
   keyword : R5_CodeableConcept [];
   location : R5_CodeableConcept [];
   description : string ;
   enrollment : R5_Reference [];
   period : R5_Period ;
   sponsor : R5_Reference ;
   principalInvestigator : R5_Reference ;
   site : R5_Reference [];
   reasonStopped : R5_CodeableConcept ;
   note : R5_Annotation [];
   arm : R5_ResearchStudy_Arm [];
   objective : R5_ResearchStudy_Objective [];
}

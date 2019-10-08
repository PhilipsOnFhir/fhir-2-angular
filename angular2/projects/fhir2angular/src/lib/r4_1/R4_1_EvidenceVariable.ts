import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_EvidenceVariableTypeEnum } from './R4_1_EvidenceVariableTypeEnum'
import { R4_1_EvidenceVariable_Characteristic } from './R4_1_EvidenceVariable_Characteristic'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_RelatedArtifact } from './R4_1_RelatedArtifact'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_EvidenceVariable      extends R4_1_DomainResource
{

   static def : string = 'EvidenceVariable';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   shortTitle : string ;
   subtitle : string ;
   status : R4_1_PublicationStatusEnum ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   note : R4_1_Annotation [];
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
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
   type : R4_1_EvidenceVariableTypeEnum ;
   characteristic : R4_1_EvidenceVariable_Characteristic [];
}

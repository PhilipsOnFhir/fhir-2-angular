import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_EvidenceVariableTypeEnum } from './R4_EvidenceVariableTypeEnum'
import { R4_EvidenceVariable_Characteristic } from './R4_EvidenceVariable_Characteristic'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_RelatedArtifact } from './R4_RelatedArtifact'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_EvidenceVariable      extends R4_DomainResource
{

   static def : string = 'EvidenceVariable';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   shortTitle : string ;
   subtitle : string ;
   status : R4_PublicationStatusEnum ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   note : R4_Annotation [];
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
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
   type : R4_EvidenceVariableTypeEnum ;
   characteristic : R4_EvidenceVariable_Characteristic [];
}

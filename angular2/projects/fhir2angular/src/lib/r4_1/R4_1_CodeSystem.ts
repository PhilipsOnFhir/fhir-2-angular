import { R4_1_CodeSystemContentModeEnum } from './R4_1_CodeSystemContentModeEnum'
import { R4_1_CodeSystemHierarchyMeaningEnum } from './R4_1_CodeSystemHierarchyMeaningEnum'
import { R4_1_CodeSystem_Concept } from './R4_1_CodeSystem_Concept'
import { R4_1_CodeSystem_Filter } from './R4_1_CodeSystem_Filter'
import { R4_1_CodeSystem_Property } from './R4_1_CodeSystem_Property'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_CodeSystem      extends R4_1_DomainResource
{

   static def : string = 'CodeSystem';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   caseSensitive : boolean ;
   valueSet : string ;
   hierarchyMeaning : R4_1_CodeSystemHierarchyMeaningEnum ;
   compositional : boolean ;
   versionNeeded : boolean ;
   content : R4_1_CodeSystemContentModeEnum ;
   supplements : string ;
   count : string ;
   filter : R4_1_CodeSystem_Filter [];
   property : R4_1_CodeSystem_Property [];
   concept : R4_1_CodeSystem_Concept [];
}

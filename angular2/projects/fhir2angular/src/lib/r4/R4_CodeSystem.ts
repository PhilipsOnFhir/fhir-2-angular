import { R4_CodeSystemContentModeEnum } from './R4_CodeSystemContentModeEnum'
import { R4_CodeSystemHierarchyMeaningEnum } from './R4_CodeSystemHierarchyMeaningEnum'
import { R4_CodeSystem_Concept } from './R4_CodeSystem_Concept'
import { R4_CodeSystem_Filter } from './R4_CodeSystem_Filter'
import { R4_CodeSystem_Property } from './R4_CodeSystem_Property'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_CodeSystem      extends R4_DomainResource
{

   static def : string = 'CodeSystem';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   caseSensitive : boolean ;
   valueSet : string ;
   hierarchyMeaning : R4_CodeSystemHierarchyMeaningEnum ;
   compositional : boolean ;
   versionNeeded : boolean ;
   content : R4_CodeSystemContentModeEnum ;
   supplements : string ;
   count : string ;
   filter : R4_CodeSystem_Filter [];
   property : R4_CodeSystem_Property [];
   concept : R4_CodeSystem_Concept [];
}

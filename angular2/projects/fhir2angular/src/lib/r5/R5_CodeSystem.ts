import { R5_CodeSystemContentModeEnum } from './R5_CodeSystemContentModeEnum'
import { R5_CodeSystemHierarchyMeaningEnum } from './R5_CodeSystemHierarchyMeaningEnum'
import { R5_CodeSystem_Concept } from './R5_CodeSystem_Concept'
import { R5_CodeSystem_Filter } from './R5_CodeSystem_Filter'
import { R5_CodeSystem_Property } from './R5_CodeSystem_Property'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_CodeSystem      extends R5_DomainResource
{

   static def : string = 'CodeSystem';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   caseSensitive : boolean ;
   valueSet : string ;
   hierarchyMeaning : R5_CodeSystemHierarchyMeaningEnum ;
   compositional : boolean ;
   versionNeeded : boolean ;
   content : R5_CodeSystemContentModeEnum ;
   supplements : string ;
   count : string ;
   filter : R5_CodeSystem_Filter [];
   property : R5_CodeSystem_Property [];
   concept : R5_CodeSystem_Concept [];
}

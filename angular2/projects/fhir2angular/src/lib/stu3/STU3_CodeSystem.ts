import { STU3_CodeSystemContentModeEnum } from './STU3_CodeSystemContentModeEnum'
import { STU3_CodeSystemHierarchyMeaningEnum } from './STU3_CodeSystemHierarchyMeaningEnum'
import { STU3_CodeSystem_Concept } from './STU3_CodeSystem_Concept'
import { STU3_CodeSystem_Filter } from './STU3_CodeSystem_Filter'
import { STU3_CodeSystem_Property } from './STU3_CodeSystem_Property'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_CodeSystem      extends STU3_DomainResource
{

   static def : string = 'CodeSystem';
   url : string ;
   identifier : STU3_Identifier ;
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   caseSensitive : boolean ;
   valueSet : string ;
   hierarchyMeaning : STU3_CodeSystemHierarchyMeaningEnum ;
   compositional : boolean ;
   versionNeeded : boolean ;
   content : STU3_CodeSystemContentModeEnum ;
   count : string ;
   filter : STU3_CodeSystem_Filter [];
   property : STU3_CodeSystem_Property [];
   concept : STU3_CodeSystem_Concept [];
}

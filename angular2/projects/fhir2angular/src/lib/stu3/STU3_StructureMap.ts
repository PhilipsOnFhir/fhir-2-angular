import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_StructureMap_Group } from './STU3_StructureMap_Group'
import { STU3_StructureMap_Structure } from './STU3_StructureMap_Structure'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_StructureMap      extends STU3_DomainResource
{

   static def : string = 'StructureMap';
   url : string ;
   identifier : STU3_Identifier [];
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
   structure : STU3_StructureMap_Structure [];
   import : string [];
   group : STU3_StructureMap_Group [];
}

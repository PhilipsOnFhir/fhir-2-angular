import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_StructureMap_Group } from './R5_StructureMap_Group'
import { R5_StructureMap_Structure } from './R5_StructureMap_Structure'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_StructureMap      extends R5_DomainResource
{

   static def : string = 'StructureMap';
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
   structure : R5_StructureMap_Structure [];
   import : string [];
   group : R5_StructureMap_Group [];
}

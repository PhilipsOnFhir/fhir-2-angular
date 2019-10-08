import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ConceptMap_Group } from './R4_1_ConceptMap_Group'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ConceptMap      extends R4_1_DomainResource
{

   static def : string = 'ConceptMap';
   url : string ;
   identifier : R4_1_Identifier ;
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
   sourceUri : string ;
   sourceCanonical : string ;
   targetUri : string ;
   targetCanonical : string ;
   group : R4_1_ConceptMap_Group [];
}

import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ConceptMap_Group } from './R4_ConceptMap_Group'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ConceptMap      extends R4_DomainResource
{

   static def : string = 'ConceptMap';
   url : string ;
   identifier : R4_Identifier ;
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
   sourceUri : string ;
   sourceCanonical : string ;
   targetUri : string ;
   targetCanonical : string ;
   group : R4_ConceptMap_Group [];
}

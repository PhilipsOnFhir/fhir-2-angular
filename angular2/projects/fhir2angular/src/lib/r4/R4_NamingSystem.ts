import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_NamingSystemTypeEnum } from './R4_NamingSystemTypeEnum'
import { R4_NamingSystem_UniqueId } from './R4_NamingSystem_UniqueId'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_NamingSystem      extends R4_DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : R4_PublicationStatusEnum ;
   kind : R4_NamingSystemTypeEnum ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   responsible : string ;
   type : R4_CodeableConcept ;
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   usage : string ;
   uniqueId : R4_NamingSystem_UniqueId [];
}

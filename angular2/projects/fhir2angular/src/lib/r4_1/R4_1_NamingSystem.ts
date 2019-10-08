import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_NamingSystemTypeEnum } from './R4_1_NamingSystemTypeEnum'
import { R4_1_NamingSystem_UniqueId } from './R4_1_NamingSystem_UniqueId'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_NamingSystem      extends R4_1_DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : R4_1_PublicationStatusEnum ;
   kind : R4_1_NamingSystemTypeEnum ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   responsible : string ;
   type : R4_1_CodeableConcept ;
   description : string ;
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   usage : string ;
   uniqueId : R4_1_NamingSystem_UniqueId [];
}

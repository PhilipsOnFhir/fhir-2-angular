import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_NamingSystemTypeEnum } from './R5_NamingSystemTypeEnum'
import { R5_NamingSystem_UniqueId } from './R5_NamingSystem_UniqueId'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_NamingSystem      extends R5_DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : R5_PublicationStatusEnum ;
   kind : R5_NamingSystemTypeEnum ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   responsible : string ;
   type : R5_CodeableConcept ;
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   usage : string ;
   uniqueId : R5_NamingSystem_UniqueId [];
}

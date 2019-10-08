import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_NamingSystemTypeEnum } from './STU3_NamingSystemTypeEnum'
import { STU3_NamingSystem_UniqueId } from './STU3_NamingSystem_UniqueId'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_NamingSystem      extends STU3_DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : STU3_PublicationStatusEnum ;
   kind : STU3_NamingSystemTypeEnum ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   responsible : string ;
   type : STU3_CodeableConcept ;
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   usage : string ;
   uniqueId : STU3_NamingSystem_UniqueId [];
   replacedBy : STU3_Reference ;
}

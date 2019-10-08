import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_NamingSystemTypeEnum } from './DSTU2_NamingSystemTypeEnum'
import { DSTU2_NamingSystem_Contact } from './DSTU2_NamingSystem_Contact'
import { DSTU2_NamingSystem_UniqueId } from './DSTU2_NamingSystem_UniqueId'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_NamingSystem      extends DSTU2_DomainResource
{

   static def : string = 'NamingSystem';
   name : string ;
   status : string ;
   kind : DSTU2_NamingSystemTypeEnum ;
   publisher : string ;
   contact : DSTU2_NamingSystem_Contact [];
   responsible : string ;
   date : string ;
   type : DSTU2_CodeableConcept ;
   description : string ;
   useContext : DSTU2_CodeableConcept [];
   usage : string ;
   uniqueId : DSTU2_NamingSystem_UniqueId [];
   replacedBy : DSTU2_Reference ;
}

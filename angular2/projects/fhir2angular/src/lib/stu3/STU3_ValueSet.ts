import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_UsageContext } from './STU3_UsageContext'
import { STU3_ValueSet_Compose } from './STU3_ValueSet_Compose'
import { STU3_ValueSet_Expansion } from './STU3_ValueSet_Expansion'

export class STU3_ValueSet      extends STU3_DomainResource
{

   static def : string = 'ValueSet';
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
   immutable : boolean ;
   purpose : string ;
   copyright : string ;
   extensible : boolean ;
   compose : STU3_ValueSet_Compose ;
   expansion : STU3_ValueSet_Expansion ;
}

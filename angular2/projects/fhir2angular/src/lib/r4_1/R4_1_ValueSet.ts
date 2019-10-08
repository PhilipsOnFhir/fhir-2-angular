import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'
import { R4_1_ValueSet_Compose } from './R4_1_ValueSet_Compose'
import { R4_1_ValueSet_Expansion } from './R4_1_ValueSet_Expansion'

export class R4_1_ValueSet      extends R4_1_DomainResource
{

   static def : string = 'ValueSet';
   url : string ;
   identifier : R4_1_Identifier [];
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
   immutable : boolean ;
   purpose : string ;
   copyright : string ;
   compose : R4_1_ValueSet_Compose ;
   expansion : R4_1_ValueSet_Expansion ;
}

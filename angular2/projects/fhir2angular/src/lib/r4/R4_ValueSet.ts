import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'
import { R4_ValueSet_Compose } from './R4_ValueSet_Compose'
import { R4_ValueSet_Expansion } from './R4_ValueSet_Expansion'

export class R4_ValueSet      extends R4_DomainResource
{

   static def : string = 'ValueSet';
   url : string ;
   identifier : R4_Identifier [];
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
   immutable : boolean ;
   purpose : string ;
   copyright : string ;
   compose : R4_ValueSet_Compose ;
   expansion : R4_ValueSet_Expansion ;
}

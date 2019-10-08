import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'
import { R5_ValueSet_Compose } from './R5_ValueSet_Compose'
import { R5_ValueSet_Expansion } from './R5_ValueSet_Expansion'

export class R5_ValueSet      extends R5_DomainResource
{

   static def : string = 'ValueSet';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   title : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   immutable : boolean ;
   purpose : string ;
   copyright : string ;
   compose : R5_ValueSet_Compose ;
   expansion : R5_ValueSet_Expansion ;
}

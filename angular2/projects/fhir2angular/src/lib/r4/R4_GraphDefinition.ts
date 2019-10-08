import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_GraphDefinition_Link } from './R4_GraphDefinition_Link'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_GraphDefinition      extends R4_DomainResource
{

   static def : string = 'GraphDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   description : string ;
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   purpose : string ;
   start : string ;
   profile : string ;
   link : R4_GraphDefinition_Link [];
}

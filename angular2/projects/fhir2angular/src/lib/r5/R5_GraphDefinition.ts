import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_GraphDefinition_Link } from './R5_GraphDefinition_Link'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_GraphDefinition      extends R5_DomainResource
{

   static def : string = 'GraphDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   description : string ;
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   purpose : string ;
   start : string ;
   profile : string ;
   link : R5_GraphDefinition_Link [];
}

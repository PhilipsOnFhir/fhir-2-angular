import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_GraphDefinition_Link } from './STU3_GraphDefinition_Link'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_ResourceTypeEnum } from './STU3_ResourceTypeEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_GraphDefinition      extends STU3_DomainResource
{

   static def : string = 'GraphDefinition';
   url : string ;
   version : string ;
   name : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   start : STU3_ResourceTypeEnum ;
   profile : string ;
   link : STU3_GraphDefinition_Link [];
}

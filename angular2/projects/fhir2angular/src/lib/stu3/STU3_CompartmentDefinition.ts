import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_CompartmentDefinition_Resource } from './STU3_CompartmentDefinition_Resource'
import { STU3_CompartmentTypeEnum } from './STU3_CompartmentTypeEnum'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_CompartmentDefinition      extends STU3_DomainResource
{

   static def : string = 'CompartmentDefinition';
   url : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   purpose : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   code : STU3_CompartmentTypeEnum ;
   search : boolean ;
   resource : STU3_CompartmentDefinition_Resource [];
}

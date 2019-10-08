import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImplementationGuide_Dependency } from './STU3_ImplementationGuide_Dependency'
import { STU3_ImplementationGuide_Global } from './STU3_ImplementationGuide_Global'
import { STU3_ImplementationGuide_Package } from './STU3_ImplementationGuide_Package'
import { STU3_ImplementationGuide_Page } from './STU3_ImplementationGuide_Page'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_ImplementationGuide      extends STU3_DomainResource
{

   static def : string = 'ImplementationGuide';
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
   copyright : string ;
   fhirVersion : string ;
   dependency : STU3_ImplementationGuide_Dependency [];
   package : STU3_ImplementationGuide_Package [];
   global : STU3_ImplementationGuide_Global [];
   binary : string [];
   page : STU3_ImplementationGuide_Page ;
}

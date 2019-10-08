import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FHIRVersionEnum } from './R4_1_FHIRVersionEnum'
import { R4_1_ImplementationGuide_Definition } from './R4_1_ImplementationGuide_Definition'
import { R4_1_ImplementationGuide_DependsOn } from './R4_1_ImplementationGuide_DependsOn'
import { R4_1_ImplementationGuide_Global } from './R4_1_ImplementationGuide_Global'
import { R4_1_ImplementationGuide_Manifest } from './R4_1_ImplementationGuide_Manifest'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_SPDXLicenseEnum } from './R4_1_SPDXLicenseEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ImplementationGuide      extends R4_1_DomainResource
{

   static def : string = 'ImplementationGuide';
   url : string ;
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
   copyright : string ;
   packageId : string ;
   license : R4_1_SPDXLicenseEnum ;
   fhirVersion : R4_1_FHIRVersionEnum [];
   dependsOn : R4_1_ImplementationGuide_DependsOn [];
   global : R4_1_ImplementationGuide_Global [];
   definition : R4_1_ImplementationGuide_Definition ;
   manifest : R4_1_ImplementationGuide_Manifest ;
}

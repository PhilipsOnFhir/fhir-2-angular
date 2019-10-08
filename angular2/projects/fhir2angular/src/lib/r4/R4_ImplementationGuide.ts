import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FHIRVersionEnum } from './R4_FHIRVersionEnum'
import { R4_ImplementationGuide_Definition } from './R4_ImplementationGuide_Definition'
import { R4_ImplementationGuide_DependsOn } from './R4_ImplementationGuide_DependsOn'
import { R4_ImplementationGuide_Global } from './R4_ImplementationGuide_Global'
import { R4_ImplementationGuide_Manifest } from './R4_ImplementationGuide_Manifest'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_SPDXLicenseEnum } from './R4_SPDXLicenseEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ImplementationGuide      extends R4_DomainResource
{

   static def : string = 'ImplementationGuide';
   url : string ;
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
   copyright : string ;
   packageId : string ;
   license : R4_SPDXLicenseEnum ;
   fhirVersion : R4_FHIRVersionEnum [];
   dependsOn : R4_ImplementationGuide_DependsOn [];
   global : R4_ImplementationGuide_Global [];
   definition : R4_ImplementationGuide_Definition ;
   manifest : R4_ImplementationGuide_Manifest ;
}

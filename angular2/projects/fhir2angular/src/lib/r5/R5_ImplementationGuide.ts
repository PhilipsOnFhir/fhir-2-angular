import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FHIRVersionEnum } from './R5_FHIRVersionEnum'
import { R5_ImplementationGuide_Definition } from './R5_ImplementationGuide_Definition'
import { R5_ImplementationGuide_DependsOn } from './R5_ImplementationGuide_DependsOn'
import { R5_ImplementationGuide_Global } from './R5_ImplementationGuide_Global'
import { R5_ImplementationGuide_Manifest } from './R5_ImplementationGuide_Manifest'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_SPDXLicenseEnum } from './R5_SPDXLicenseEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ImplementationGuide      extends R5_DomainResource
{

   static def : string = 'ImplementationGuide';
   url : string ;
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
   copyright : string ;
   packageId : string ;
   license : R5_SPDXLicenseEnum ;
   fhirVersion : R5_FHIRVersionEnum [];
   dependsOn : R5_ImplementationGuide_DependsOn [];
   global : R5_ImplementationGuide_Global [];
   definition : R5_ImplementationGuide_Definition ;
   manifest : R5_ImplementationGuide_Manifest ;
}

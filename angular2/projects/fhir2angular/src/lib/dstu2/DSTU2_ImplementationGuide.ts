import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImplementationGuide_Contact } from './DSTU2_ImplementationGuide_Contact'
import { DSTU2_ImplementationGuide_Dependency } from './DSTU2_ImplementationGuide_Dependency'
import { DSTU2_ImplementationGuide_Global } from './DSTU2_ImplementationGuide_Global'
import { DSTU2_ImplementationGuide_Package } from './DSTU2_ImplementationGuide_Package'
import { DSTU2_ImplementationGuide_Page } from './DSTU2_ImplementationGuide_Page'

export class DSTU2_ImplementationGuide      extends DSTU2_DomainResource
{

   static def : string = 'ImplementationGuide';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_ImplementationGuide_Contact [];
   date : string ;
   description : string ;
   useContext : DSTU2_CodeableConcept [];
   copyright : string ;
   fhirVersion : string ;
   dependency : DSTU2_ImplementationGuide_Dependency [];
   package : DSTU2_ImplementationGuide_Package [];
   global : DSTU2_ImplementationGuide_Global [];
   binary : string [];
   page : DSTU2_ImplementationGuide_Page ;
}

import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ExampleScenario_Actor } from './R4_ExampleScenario_Actor'
import { R4_ExampleScenario_Instance } from './R4_ExampleScenario_Instance'
import { R4_ExampleScenario_Process } from './R4_ExampleScenario_Process'
import { R4_Identifier } from './R4_Identifier'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_ExampleScenario      extends R4_DomainResource
{

   static def : string = 'ExampleScenario';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   status : R4_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_ContactDetail [];
   useContext : R4_UsageContext [];
   jurisdiction : R4_CodeableConcept [];
   copyright : string ;
   purpose : string ;
   actor : R4_ExampleScenario_Actor [];
   instance : R4_ExampleScenario_Instance [];
   process : R4_ExampleScenario_Process [];
   workflow : string [];
}

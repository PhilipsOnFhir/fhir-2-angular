import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ExampleScenario_Actor } from './R4_1_ExampleScenario_Actor'
import { R4_1_ExampleScenario_Instance } from './R4_1_ExampleScenario_Instance'
import { R4_1_ExampleScenario_Process } from './R4_1_ExampleScenario_Process'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_ExampleScenario      extends R4_1_DomainResource
{

   static def : string = 'ExampleScenario';
   url : string ;
   identifier : R4_1_Identifier [];
   version : string ;
   name : string ;
   status : R4_1_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R4_1_ContactDetail [];
   useContext : R4_1_UsageContext [];
   jurisdiction : R4_1_CodeableConcept [];
   copyright : string ;
   purpose : string ;
   actor : R4_1_ExampleScenario_Actor [];
   instance : R4_1_ExampleScenario_Instance [];
   process : R4_1_ExampleScenario_Process [];
   workflow : string [];
}

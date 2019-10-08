import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ExampleScenario_Actor } from './R5_ExampleScenario_Actor'
import { R5_ExampleScenario_Instance } from './R5_ExampleScenario_Instance'
import { R5_ExampleScenario_Process } from './R5_ExampleScenario_Process'
import { R5_Identifier } from './R5_Identifier'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_ExampleScenario      extends R5_DomainResource
{

   static def : string = 'ExampleScenario';
   url : string ;
   identifier : R5_Identifier [];
   version : string ;
   name : string ;
   status : R5_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : R5_ContactDetail [];
   useContext : R5_UsageContext [];
   jurisdiction : R5_CodeableConcept [];
   copyright : string ;
   purpose : string ;
   actor : R5_ExampleScenario_Actor [];
   instance : R5_ExampleScenario_Instance [];
   process : R5_ExampleScenario_Process [];
   workflow : string [];
}

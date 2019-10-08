import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_ContactDetail } from './R4_1_ContactDetail'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_PublicationStatusEnum } from './R4_1_PublicationStatusEnum'
import { R4_1_Reference } from './R4_1_Reference'
import { R4_1_TestScript_Destination } from './R4_1_TestScript_Destination'
import { R4_1_TestScript_Fixture } from './R4_1_TestScript_Fixture'
import { R4_1_TestScript_Metadata } from './R4_1_TestScript_Metadata'
import { R4_1_TestScript_Origin } from './R4_1_TestScript_Origin'
import { R4_1_TestScript_Setup } from './R4_1_TestScript_Setup'
import { R4_1_TestScript_Teardown } from './R4_1_TestScript_Teardown'
import { R4_1_TestScript_Test } from './R4_1_TestScript_Test'
import { R4_1_TestScript_Variable } from './R4_1_TestScript_Variable'
import { R4_1_UsageContext } from './R4_1_UsageContext'

export class R4_1_TestScript      extends R4_1_DomainResource
{

   static def : string = 'TestScript';
   url : string ;
   identifier : R4_1_Identifier ;
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
   purpose : string ;
   copyright : string ;
   origin : R4_1_TestScript_Origin [];
   destination : R4_1_TestScript_Destination [];
   metadata : R4_1_TestScript_Metadata ;
   fixture : R4_1_TestScript_Fixture [];
   profile : R4_1_Reference [];
   variable : R4_1_TestScript_Variable [];
   setup : R4_1_TestScript_Setup ;
   test : R4_1_TestScript_Test [];
   teardown : R4_1_TestScript_Teardown ;
}

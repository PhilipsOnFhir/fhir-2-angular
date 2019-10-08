import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ContactDetail } from './R4_ContactDetail'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_PublicationStatusEnum } from './R4_PublicationStatusEnum'
import { R4_Reference } from './R4_Reference'
import { R4_TestScript_Destination } from './R4_TestScript_Destination'
import { R4_TestScript_Fixture } from './R4_TestScript_Fixture'
import { R4_TestScript_Metadata } from './R4_TestScript_Metadata'
import { R4_TestScript_Origin } from './R4_TestScript_Origin'
import { R4_TestScript_Setup } from './R4_TestScript_Setup'
import { R4_TestScript_Teardown } from './R4_TestScript_Teardown'
import { R4_TestScript_Test } from './R4_TestScript_Test'
import { R4_TestScript_Variable } from './R4_TestScript_Variable'
import { R4_UsageContext } from './R4_UsageContext'

export class R4_TestScript      extends R4_DomainResource
{

   static def : string = 'TestScript';
   url : string ;
   identifier : R4_Identifier ;
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
   purpose : string ;
   copyright : string ;
   origin : R4_TestScript_Origin [];
   destination : R4_TestScript_Destination [];
   metadata : R4_TestScript_Metadata ;
   fixture : R4_TestScript_Fixture [];
   profile : R4_Reference [];
   variable : R4_TestScript_Variable [];
   setup : R4_TestScript_Setup ;
   test : R4_TestScript_Test [];
   teardown : R4_TestScript_Teardown ;
}

import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_ContactDetail } from './R5_ContactDetail'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_PublicationStatusEnum } from './R5_PublicationStatusEnum'
import { R5_Reference } from './R5_Reference'
import { R5_TestScript_Destination } from './R5_TestScript_Destination'
import { R5_TestScript_Fixture } from './R5_TestScript_Fixture'
import { R5_TestScript_Metadata } from './R5_TestScript_Metadata'
import { R5_TestScript_Origin } from './R5_TestScript_Origin'
import { R5_TestScript_Setup } from './R5_TestScript_Setup'
import { R5_TestScript_Teardown } from './R5_TestScript_Teardown'
import { R5_TestScript_Test } from './R5_TestScript_Test'
import { R5_TestScript_Variable } from './R5_TestScript_Variable'
import { R5_UsageContext } from './R5_UsageContext'

export class R5_TestScript      extends R5_DomainResource
{

   static def : string = 'TestScript';
   url : string ;
   identifier : R5_Identifier ;
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
   purpose : string ;
   copyright : string ;
   origin : R5_TestScript_Origin [];
   destination : R5_TestScript_Destination [];
   metadata : R5_TestScript_Metadata ;
   fixture : R5_TestScript_Fixture [];
   profile : R5_Reference [];
   variable : R5_TestScript_Variable [];
   setup : R5_TestScript_Setup ;
   test : R5_TestScript_Test [];
   teardown : R5_TestScript_Teardown ;
}

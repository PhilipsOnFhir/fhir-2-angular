import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ContactDetail } from './STU3_ContactDetail'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_PublicationStatusEnum } from './STU3_PublicationStatusEnum'
import { STU3_Reference } from './STU3_Reference'
import { STU3_TestScript_Destination } from './STU3_TestScript_Destination'
import { STU3_TestScript_Fixture } from './STU3_TestScript_Fixture'
import { STU3_TestScript_Metadata } from './STU3_TestScript_Metadata'
import { STU3_TestScript_Origin } from './STU3_TestScript_Origin'
import { STU3_TestScript_Rule } from './STU3_TestScript_Rule'
import { STU3_TestScript_Ruleset } from './STU3_TestScript_Ruleset'
import { STU3_TestScript_Setup } from './STU3_TestScript_Setup'
import { STU3_TestScript_Teardown } from './STU3_TestScript_Teardown'
import { STU3_TestScript_Test } from './STU3_TestScript_Test'
import { STU3_TestScript_Variable } from './STU3_TestScript_Variable'
import { STU3_UsageContext } from './STU3_UsageContext'

export class STU3_TestScript      extends STU3_DomainResource
{

   static def : string = 'TestScript';
   url : string ;
   identifier : STU3_Identifier ;
   version : string ;
   name : string ;
   title : string ;
   status : STU3_PublicationStatusEnum ;
   experimental : boolean ;
   date : string ;
   publisher : string ;
   contact : STU3_ContactDetail [];
   description : string ;
   useContext : STU3_UsageContext [];
   jurisdiction : STU3_CodeableConcept [];
   purpose : string ;
   copyright : string ;
   origin : STU3_TestScript_Origin [];
   destination : STU3_TestScript_Destination [];
   metadata : STU3_TestScript_Metadata ;
   fixture : STU3_TestScript_Fixture [];
   profile : STU3_Reference [];
   variable : STU3_TestScript_Variable [];
   rule : STU3_TestScript_Rule [];
   ruleset : STU3_TestScript_Ruleset [];
   setup : STU3_TestScript_Setup ;
   test : STU3_TestScript_Test [];
   teardown : STU3_TestScript_Teardown ;
}

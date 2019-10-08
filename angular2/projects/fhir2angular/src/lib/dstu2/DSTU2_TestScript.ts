import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_TestScript_Contact } from './DSTU2_TestScript_Contact'
import { DSTU2_TestScript_Fixture } from './DSTU2_TestScript_Fixture'
import { DSTU2_TestScript_Metadata } from './DSTU2_TestScript_Metadata'
import { DSTU2_TestScript_Setup } from './DSTU2_TestScript_Setup'
import { DSTU2_TestScript_Teardown } from './DSTU2_TestScript_Teardown'
import { DSTU2_TestScript_Test } from './DSTU2_TestScript_Test'
import { DSTU2_TestScript_Variable } from './DSTU2_TestScript_Variable'

export class DSTU2_TestScript      extends DSTU2_DomainResource
{

   static def : string = 'TestScript';
   url : string ;
   version : string ;
   name : string ;
   status : string ;
   identifier : DSTU2_Identifier ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_TestScript_Contact [];
   date : string ;
   description : string ;
   useContext : DSTU2_CodeableConcept [];
   requirements : string ;
   copyright : string ;
   metadata : DSTU2_TestScript_Metadata ;
   multiserver : boolean ;
   fixture : DSTU2_TestScript_Fixture [];
   profile : DSTU2_Reference [];
   variable : DSTU2_TestScript_Variable [];
   setup : DSTU2_TestScript_Setup ;
   test : DSTU2_TestScript_Test [];
   teardown : DSTU2_TestScript_Teardown ;
}

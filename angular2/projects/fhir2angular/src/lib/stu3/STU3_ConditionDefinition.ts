import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ConditionDefinition_Contact } from './STU3_ConditionDefinition_Contact'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ConditionDefinition      extends STU3_DomainResource
{

   static def : string = 'ConditionDefinition';
   url : string ;
   identifier : STU3_Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : STU3_ConditionDefinition_Contact [];
   date : string ;
   useContext : STU3_CodeableConcept [];
   copyright : string ;
   severity : STU3_CodeableConcept ;
   occurance : STU3_CodeableConcept [];
   findingSite : STU3_Reference [];
   morphology : STU3_Reference [];
   causedBy : STU3_Reference [];
   associated : STU3_Reference [];
}

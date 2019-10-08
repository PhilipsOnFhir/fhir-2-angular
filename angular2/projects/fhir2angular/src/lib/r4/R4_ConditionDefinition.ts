import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_ConditionDefinition_Contact } from './R4_ConditionDefinition_Contact'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_ConditionDefinition      extends R4_DomainResource
{

   static def : string = 'ConditionDefinition';
   url : string ;
   identifier : R4_Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : R4_ConditionDefinition_Contact [];
   date : string ;
   useContext : R4_CodeableConcept [];
   copyright : string ;
   severity : R4_CodeableConcept ;
   occurance : R4_CodeableConcept [];
   findingSite : R4_Reference [];
   morphology : R4_Reference [];
   causedBy : R4_Reference [];
   associated : R4_Reference [];
}

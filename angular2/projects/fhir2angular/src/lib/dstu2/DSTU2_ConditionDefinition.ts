import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ConditionDefinition_Contact } from './DSTU2_ConditionDefinition_Contact'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ConditionDefinition      extends DSTU2_DomainResource
{

   static def : string = 'ConditionDefinition';
   url : string ;
   identifier : DSTU2_Identifier [];
   version : string ;
   name : string ;
   status : string ;
   experimental : boolean ;
   publisher : string ;
   contact : DSTU2_ConditionDefinition_Contact [];
   date : string ;
   useContext : DSTU2_CodeableConcept [];
   copyright : string ;
   severity : DSTU2_CodeableConcept ;
   occurance : DSTU2_CodeableConcept [];
   findingSite : DSTU2_Reference [];
   morphology : DSTU2_Reference [];
   causedBy : DSTU2_Reference [];
   associated : DSTU2_Reference [];
}

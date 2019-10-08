import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_Contract_Agent1 } from './STU3_Contract_Agent1'
import { STU3_Contract_ValuedItem1 } from './STU3_Contract_ValuedItem1'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Contract_Term      extends STU3_BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : STU3_Identifier ;
   issued : string ;
   applies : STU3_Period ;
   type : STU3_CodeableConcept ;
   subType : STU3_CodeableConcept ;
   topic : STU3_Reference [];
   action : STU3_CodeableConcept [];
   actionReason : STU3_CodeableConcept [];
   securityLabel : STU3_Coding [];
   agent : STU3_Contract_Agent1 [];
   text : string ;
   valuedItem : STU3_Contract_ValuedItem1 [];
   group : STU3_Contract_Term [];
}

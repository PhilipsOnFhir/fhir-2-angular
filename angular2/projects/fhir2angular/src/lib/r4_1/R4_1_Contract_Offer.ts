import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Contract_Answer } from './R4_1_Contract_Answer'
import { R4_1_Contract_Party } from './R4_1_Contract_Party'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_Offer      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Offer';
   identifier : R4_1_Identifier [];
   party : R4_1_Contract_Party [];
   topic : R4_1_Reference ;
   type : R4_1_CodeableConcept ;
   decision : R4_1_CodeableConcept ;
   decisionMode : R4_1_CodeableConcept [];
   answer : R4_1_Contract_Answer [];
   text : string ;
   linkId : string [];
   securityLabelNumber : string [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Contract_Answer } from './R4_Contract_Answer'
import { R4_Contract_Party } from './R4_Contract_Party'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Reference } from './R4_Reference'

export class R4_Contract_Offer      extends R4_BackboneElement
{

   static def : string = 'Contract_Offer';
   identifier : R4_Identifier [];
   party : R4_Contract_Party [];
   topic : R4_Reference ;
   type : R4_CodeableConcept ;
   decision : R4_CodeableConcept ;
   decisionMode : R4_CodeableConcept [];
   answer : R4_Contract_Answer [];
   text : string ;
   linkId : string [];
   securityLabelNumber : string [];
}

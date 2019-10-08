import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Contract_Answer } from './R5_Contract_Answer'
import { R5_Contract_Party } from './R5_Contract_Party'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_Offer      extends R5_BackboneElement
{

   static def : string = 'Contract_Offer';
   identifier : R5_Identifier [];
   party : R5_Contract_Party [];
   topic : R5_Reference ;
   type : R5_CodeableConcept ;
   decision : R5_CodeableConcept ;
   decisionMode : R5_CodeableConcept [];
   answer : R5_Contract_Answer [];
   text : string ;
   linkId : string [];
   securityLabelNumber : string [];
}

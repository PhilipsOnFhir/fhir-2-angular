import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_Contract_Answer } from './R4_1_Contract_Answer'
import { R4_1_Contract_Context } from './R4_1_Contract_Context'
import { R4_1_Contract_ValuedItem } from './R4_1_Contract_ValuedItem'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_Asset      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Asset';
   scope : R4_1_CodeableConcept ;
   type : R4_1_CodeableConcept [];
   typeReference : R4_1_Reference [];
   subtype : R4_1_CodeableConcept [];
   relationship : R4_1_Coding ;
   context : R4_1_Contract_Context [];
   condition : string ;
   periodType : R4_1_CodeableConcept [];
   period : R4_1_Period [];
   usePeriod : R4_1_Period [];
   text : string ;
   linkId : string [];
   answer : R4_1_Contract_Answer [];
   securityLabelNumber : string [];
   valuedItem : R4_1_Contract_ValuedItem [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_Contract_Answer } from './R4_Contract_Answer'
import { R4_Contract_Context } from './R4_Contract_Context'
import { R4_Contract_ValuedItem } from './R4_Contract_ValuedItem'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Contract_Asset      extends R4_BackboneElement
{

   static def : string = 'Contract_Asset';
   scope : R4_CodeableConcept ;
   type : R4_CodeableConcept [];
   typeReference : R4_Reference [];
   subtype : R4_CodeableConcept [];
   relationship : R4_Coding ;
   context : R4_Contract_Context [];
   condition : string ;
   periodType : R4_CodeableConcept [];
   period : R4_Period [];
   usePeriod : R4_Period [];
   text : string ;
   linkId : string [];
   answer : R4_Contract_Answer [];
   securityLabelNumber : string [];
   valuedItem : R4_Contract_ValuedItem [];
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_Contract_Answer } from './R5_Contract_Answer'
import { R5_Contract_Context } from './R5_Contract_Context'
import { R5_Contract_ValuedItem } from './R5_Contract_ValuedItem'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_Asset      extends R5_BackboneElement
{

   static def : string = 'Contract_Asset';
   scope : R5_CodeableConcept ;
   type : R5_CodeableConcept [];
   typeReference : R5_Reference [];
   subtype : R5_CodeableConcept [];
   relationship : R5_Coding ;
   context : R5_Contract_Context [];
   condition : string ;
   periodType : R5_CodeableConcept [];
   period : R5_Period [];
   usePeriod : R5_Period [];
   text : string ;
   linkId : string [];
   answer : R5_Contract_Answer [];
   securityLabelNumber : string [];
   valuedItem : R5_Contract_ValuedItem [];
}

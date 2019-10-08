import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_Contract_Actor1 } from './DSTU2_Contract_Actor1'
import { DSTU2_Contract_ValuedItem1 } from './DSTU2_Contract_ValuedItem1'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Contract_Term      extends DSTU2_BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : DSTU2_Identifier ;
   issued : string ;
   applies : DSTU2_Period ;
   type : DSTU2_CodeableConcept ;
   subType : DSTU2_CodeableConcept ;
   subject : DSTU2_Reference ;
   action : DSTU2_CodeableConcept [];
   actionReason : DSTU2_CodeableConcept [];
   actor : DSTU2_Contract_Actor1 [];
   text : string ;
   valuedItem : DSTU2_Contract_ValuedItem1 [];
   group : DSTU2_Contract_Term [];
}

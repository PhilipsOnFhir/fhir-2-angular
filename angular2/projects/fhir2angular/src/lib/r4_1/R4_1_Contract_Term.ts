import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Contract_Action } from './R4_1_Contract_Action'
import { R4_1_Contract_Asset } from './R4_1_Contract_Asset'
import { R4_1_Contract_Offer } from './R4_1_Contract_Offer'
import { R4_1_Contract_SecurityLabel } from './R4_1_Contract_SecurityLabel'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Contract_Term      extends R4_1_BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : R4_1_Identifier ;
   issued : string ;
   applies : R4_1_Period ;
   topicCodeableConcept : R4_1_CodeableConcept ;
   topicReference : R4_1_Reference ;
   type : R4_1_CodeableConcept ;
   subType : R4_1_CodeableConcept ;
   text : string ;
   securityLabel : R4_1_Contract_SecurityLabel [];
   offer : R4_1_Contract_Offer ;
   asset : R4_1_Contract_Asset [];
   action : R4_1_Contract_Action [];
   group : R4_1_Contract_Term [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Contract_Action } from './R4_Contract_Action'
import { R4_Contract_Asset } from './R4_Contract_Asset'
import { R4_Contract_Offer } from './R4_Contract_Offer'
import { R4_Contract_SecurityLabel } from './R4_Contract_SecurityLabel'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_Contract_Term      extends R4_BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : R4_Identifier ;
   issued : string ;
   applies : R4_Period ;
   topicCodeableConcept : R4_CodeableConcept ;
   topicReference : R4_Reference ;
   type : R4_CodeableConcept ;
   subType : R4_CodeableConcept ;
   text : string ;
   securityLabel : R4_Contract_SecurityLabel [];
   offer : R4_Contract_Offer ;
   asset : R4_Contract_Asset [];
   action : R4_Contract_Action [];
   group : R4_Contract_Term [];
}

import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Contract_Action } from './R5_Contract_Action'
import { R5_Contract_Asset } from './R5_Contract_Asset'
import { R5_Contract_Offer } from './R5_Contract_Offer'
import { R5_Contract_SecurityLabel } from './R5_Contract_SecurityLabel'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_Contract_Term      extends R5_BackboneElement
{

   static def : string = 'Contract_Term';
   identifier : R5_Identifier ;
   issued : string ;
   applies : R5_Period ;
   topicCodeableConcept : R5_CodeableConcept ;
   topicReference : R5_Reference ;
   type : R5_CodeableConcept ;
   subType : R5_CodeableConcept ;
   text : string ;
   securityLabel : R5_Contract_SecurityLabel [];
   offer : R5_Contract_Offer ;
   asset : R5_Contract_Asset [];
   action : R5_Contract_Action [];
   group : R5_Contract_Term [];
}

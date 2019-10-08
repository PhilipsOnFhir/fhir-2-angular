import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ExplanationOfBenefit_Payee      extends R5_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Payee';
   type : R5_CodeableConcept ;
   party : R5_Reference ;
}

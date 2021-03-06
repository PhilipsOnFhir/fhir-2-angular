import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'

export class R5_ExplanationOfBenefit_Total      extends R5_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Total';
   category : R5_CodeableConcept ;
   amount : R5_Money ;
}

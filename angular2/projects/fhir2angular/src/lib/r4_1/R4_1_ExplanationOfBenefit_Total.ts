import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'

export class R4_1_ExplanationOfBenefit_Total      extends R4_1_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Total';
   category : R4_1_CodeableConcept ;
   amount : R4_1_Money ;
}

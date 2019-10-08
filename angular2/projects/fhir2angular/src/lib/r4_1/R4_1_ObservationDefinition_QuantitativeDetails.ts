import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'

export class R4_1_ObservationDefinition_QuantitativeDetails      extends R4_1_BackboneElement
{

   static def : string = 'ObservationDefinition_QuantitativeDetails';
   customaryUnit : R4_1_CodeableConcept ;
   unit : R4_1_CodeableConcept ;
   conversionFactor : string ;
   decimalPrecision : string ;
}

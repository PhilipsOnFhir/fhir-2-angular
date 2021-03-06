import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_ObservationDefinition_QuantitativeDetails      extends R4_BackboneElement
{

   static def : string = 'ObservationDefinition_QuantitativeDetails';
   customaryUnit : R4_CodeableConcept ;
   unit : R4_CodeableConcept ;
   conversionFactor : string ;
   decimalPrecision : string ;
}

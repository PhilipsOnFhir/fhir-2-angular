import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'

export class R5_ObservationDefinition_QuantitativeDetails      extends R5_BackboneElement
{

   static def : string = 'ObservationDefinition_QuantitativeDetails';
   customaryUnit : R5_CodeableConcept ;
   unit : R5_CodeableConcept ;
   conversionFactor : string ;
   decimalPrecision : string ;
}

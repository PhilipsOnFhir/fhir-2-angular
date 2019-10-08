import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_Observation_ReferenceRange      extends R4_1_BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : R4_1_Quantity ;
   high : R4_1_Quantity ;
   type : R4_1_CodeableConcept ;
   appliesTo : R4_1_CodeableConcept [];
   age : R4_1_Range ;
   text : string ;
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Quantity } from './R4_Quantity'
import { R4_Range } from './R4_Range'

export class R4_Observation_ReferenceRange      extends R4_BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : R4_Quantity ;
   high : R4_Quantity ;
   type : R4_CodeableConcept ;
   appliesTo : R4_CodeableConcept [];
   age : R4_Range ;
   text : string ;
}

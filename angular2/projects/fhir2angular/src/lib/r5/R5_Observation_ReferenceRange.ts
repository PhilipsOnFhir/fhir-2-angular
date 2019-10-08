import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Quantity } from './R5_Quantity'
import { R5_Range } from './R5_Range'

export class R5_Observation_ReferenceRange      extends R5_BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : R5_Quantity ;
   high : R5_Quantity ;
   type : R5_CodeableConcept ;
   appliesTo : R5_CodeableConcept [];
   age : R5_Range ;
   text : string ;
}

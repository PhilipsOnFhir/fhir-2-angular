import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Quantity } from './STU3_Quantity'
import { STU3_Range } from './STU3_Range'

export class STU3_Observation_ReferenceRange      extends STU3_BackboneElement
{

   static def : string = 'Observation_ReferenceRange';
   low : STU3_Quantity ;
   high : STU3_Quantity ;
   type : STU3_CodeableConcept ;
   appliesTo : STU3_CodeableConcept [];
   age : STU3_Range ;
   text : string ;
}

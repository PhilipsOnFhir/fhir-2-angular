import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_Immunization_Explanation      extends STU3_BackboneElement
{

   static def : string = 'Immunization_Explanation';
   reason : STU3_CodeableConcept [];
   reasonNotGiven : STU3_CodeableConcept [];
}

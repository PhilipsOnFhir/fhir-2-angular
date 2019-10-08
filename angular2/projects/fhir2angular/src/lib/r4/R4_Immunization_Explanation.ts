import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'

export class R4_Immunization_Explanation      extends R4_BackboneElement
{

   static def : string = 'Immunization_Explanation';
   reason : R4_CodeableConcept [];
   reasonNotGiven : R4_CodeableConcept [];
}

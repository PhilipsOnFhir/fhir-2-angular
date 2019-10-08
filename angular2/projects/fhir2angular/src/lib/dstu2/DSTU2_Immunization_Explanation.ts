import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Immunization_Explanation      extends DSTU2_BackboneElement
{

   static def : string = 'Immunization_Explanation';
   reason : DSTU2_CodeableConcept [];
   reasonNotGiven : DSTU2_CodeableConcept [];
}

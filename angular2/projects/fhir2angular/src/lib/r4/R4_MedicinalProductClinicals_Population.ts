import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Range } from './R4_Range'

export class R4_MedicinalProductClinicals_Population      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Population';
   ageRange : R4_Range ;
   ageCodeableConcept : R4_CodeableConcept ;
   gender : R4_CodeableConcept ;
   race : R4_CodeableConcept ;
   physiologicalCondition : R4_CodeableConcept ;
}

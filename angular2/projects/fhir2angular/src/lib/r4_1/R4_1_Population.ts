import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Range } from './R4_1_Range'

export class R4_1_Population      extends R4_1_BackboneElement
{

   static def : string = 'Population';
   ageRange : R4_1_Range ;
   ageCodeableConcept : R4_1_CodeableConcept ;
   gender : R4_1_CodeableConcept ;
   race : R4_1_CodeableConcept ;
   physiologicalCondition : R4_1_CodeableConcept ;
}

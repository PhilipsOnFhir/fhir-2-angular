import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Range } from './R5_Range'

export class R5_Population      extends R5_BackboneElement
{

   static def : string = 'Population';
   ageRange : R5_Range ;
   ageCodeableConcept : R5_CodeableConcept ;
   gender : R5_CodeableConcept ;
   race : R5_CodeableConcept ;
   physiologicalCondition : R5_CodeableConcept ;
}

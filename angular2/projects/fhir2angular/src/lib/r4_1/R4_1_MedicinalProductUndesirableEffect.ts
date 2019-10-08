import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Population } from './R4_1_Population'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductUndesirableEffect      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductUndesirableEffect';
   subject : R4_1_Reference [];
   symptomConditionEffect : R4_1_CodeableConcept ;
   classification : R4_1_CodeableConcept ;
   frequencyOfOccurrence : R4_1_CodeableConcept ;
   population : R4_1_Population [];
}

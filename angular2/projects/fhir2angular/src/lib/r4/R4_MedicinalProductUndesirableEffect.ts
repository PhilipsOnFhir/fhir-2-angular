import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Population } from './R4_Population'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductUndesirableEffect      extends R4_DomainResource
{

   static def : string = 'MedicinalProductUndesirableEffect';
   subject : R4_Reference [];
   symptomConditionEffect : R4_CodeableConcept ;
   classification : R4_CodeableConcept ;
   frequencyOfOccurrence : R4_CodeableConcept ;
   population : R4_Population [];
}

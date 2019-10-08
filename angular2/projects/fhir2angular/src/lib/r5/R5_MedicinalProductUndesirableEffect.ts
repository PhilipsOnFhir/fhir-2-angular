import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Population } from './R5_Population'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductUndesirableEffect      extends R5_DomainResource
{

   static def : string = 'MedicinalProductUndesirableEffect';
   subject : R5_Reference [];
   symptomConditionEffect : R5_CodeableConcept ;
   classification : R5_CodeableConcept ;
   frequencyOfOccurrence : R5_CodeableConcept ;
   population : R5_Population [];
}

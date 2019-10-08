import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductClinicals_Population } from './R5_MedicinalProductClinicals_Population'

export class R5_MedicinalProductClinicals_UndesirableEffects      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_UndesirableEffects';
   symptomConditionEffect : R5_CodeableConcept ;
   classification : R5_CodeableConcept ;
   frequencyOfOccurrence : R5_CodeableConcept ;
   population : R5_MedicinalProductClinicals_Population [];
}

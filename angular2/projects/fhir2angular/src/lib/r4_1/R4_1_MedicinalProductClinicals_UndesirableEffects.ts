import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductClinicals_Population } from './R4_1_MedicinalProductClinicals_Population'

export class R4_1_MedicinalProductClinicals_UndesirableEffects      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_UndesirableEffects';
   symptomConditionEffect : R4_1_CodeableConcept ;
   classification : R4_1_CodeableConcept ;
   frequencyOfOccurrence : R4_1_CodeableConcept ;
   population : R4_1_MedicinalProductClinicals_Population [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductClinicals_Population } from './R4_MedicinalProductClinicals_Population'

export class R4_MedicinalProductClinicals_UndesirableEffects      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_UndesirableEffects';
   symptomConditionEffect : R4_CodeableConcept ;
   classification : R4_CodeableConcept ;
   frequencyOfOccurrence : R4_CodeableConcept ;
   population : R4_MedicinalProductClinicals_Population [];
}

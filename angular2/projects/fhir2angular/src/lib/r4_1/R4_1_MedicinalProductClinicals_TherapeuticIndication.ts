import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductClinicals_OtherTherapy } from './R4_1_MedicinalProductClinicals_OtherTherapy'
import { R4_1_MedicinalProductClinicals_Population } from './R4_1_MedicinalProductClinicals_Population'
import { R4_1_MedicinalProductClinicals_UndesirableEffects } from './R4_1_MedicinalProductClinicals_UndesirableEffects'
import { R4_1_Quantity } from './R4_1_Quantity'

export class R4_1_MedicinalProductClinicals_TherapeuticIndication      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_TherapeuticIndication';
   diseaseSymptomProcedure : R4_1_CodeableConcept ;
   diseaseStatus : R4_1_CodeableConcept ;
   comorbidity : R4_1_CodeableConcept [];
   intendedEffect : R4_1_CodeableConcept ;
   duration : R4_1_Quantity ;
   undesirableEffects : R4_1_MedicinalProductClinicals_UndesirableEffects [];
   otherTherapy : R4_1_MedicinalProductClinicals_OtherTherapy [];
   population : R4_1_MedicinalProductClinicals_Population [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductClinicals_OtherTherapy } from './R4_MedicinalProductClinicals_OtherTherapy'
import { R4_MedicinalProductClinicals_Population } from './R4_MedicinalProductClinicals_Population'
import { R4_MedicinalProductClinicals_UndesirableEffects } from './R4_MedicinalProductClinicals_UndesirableEffects'
import { R4_Quantity } from './R4_Quantity'

export class R4_MedicinalProductClinicals_TherapeuticIndication      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_TherapeuticIndication';
   diseaseSymptomProcedure : R4_CodeableConcept ;
   diseaseStatus : R4_CodeableConcept ;
   comorbidity : R4_CodeableConcept [];
   intendedEffect : R4_CodeableConcept ;
   duration : R4_Quantity ;
   undesirableEffects : R4_MedicinalProductClinicals_UndesirableEffects [];
   otherTherapy : R4_MedicinalProductClinicals_OtherTherapy [];
   population : R4_MedicinalProductClinicals_Population [];
}

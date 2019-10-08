import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductClinicals_OtherTherapy } from './R5_MedicinalProductClinicals_OtherTherapy'
import { R5_MedicinalProductClinicals_Population } from './R5_MedicinalProductClinicals_Population'
import { R5_MedicinalProductClinicals_UndesirableEffects } from './R5_MedicinalProductClinicals_UndesirableEffects'
import { R5_Quantity } from './R5_Quantity'

export class R5_MedicinalProductClinicals_TherapeuticIndication      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_TherapeuticIndication';
   diseaseSymptomProcedure : R5_CodeableConcept ;
   diseaseStatus : R5_CodeableConcept ;
   comorbidity : R5_CodeableConcept [];
   intendedEffect : R5_CodeableConcept ;
   duration : R5_Quantity ;
   undesirableEffects : R5_MedicinalProductClinicals_UndesirableEffects [];
   otherTherapy : R5_MedicinalProductClinicals_OtherTherapy [];
   population : R5_MedicinalProductClinicals_Population [];
}

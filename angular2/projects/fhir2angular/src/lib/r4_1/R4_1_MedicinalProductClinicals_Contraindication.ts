import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductClinicals_OtherTherapy } from './R4_1_MedicinalProductClinicals_OtherTherapy'
import { R4_1_MedicinalProductClinicals_Population } from './R4_1_MedicinalProductClinicals_Population'
import { R4_1_MedicinalProductClinicals_TherapeuticIndication } from './R4_1_MedicinalProductClinicals_TherapeuticIndication'

export class R4_1_MedicinalProductClinicals_Contraindication      extends R4_1_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Contraindication';
   disease : R4_1_CodeableConcept ;
   diseaseStatus : R4_1_CodeableConcept ;
   comorbidity : R4_1_CodeableConcept [];
   therapeuticIndication : R4_1_MedicinalProductClinicals_TherapeuticIndication [];
   otherTherapy : R4_1_MedicinalProductClinicals_OtherTherapy [];
   population : R4_1_MedicinalProductClinicals_Population [];
}

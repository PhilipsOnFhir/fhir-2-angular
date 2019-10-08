import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductClinicals_OtherTherapy } from './R4_MedicinalProductClinicals_OtherTherapy'
import { R4_MedicinalProductClinicals_Population } from './R4_MedicinalProductClinicals_Population'
import { R4_MedicinalProductClinicals_TherapeuticIndication } from './R4_MedicinalProductClinicals_TherapeuticIndication'

export class R4_MedicinalProductClinicals_Contraindication      extends R4_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Contraindication';
   disease : R4_CodeableConcept ;
   diseaseStatus : R4_CodeableConcept ;
   comorbidity : R4_CodeableConcept [];
   therapeuticIndication : R4_MedicinalProductClinicals_TherapeuticIndication [];
   otherTherapy : R4_MedicinalProductClinicals_OtherTherapy [];
   population : R4_MedicinalProductClinicals_Population [];
}

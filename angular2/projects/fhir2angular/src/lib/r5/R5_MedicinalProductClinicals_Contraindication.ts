import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductClinicals_OtherTherapy } from './R5_MedicinalProductClinicals_OtherTherapy'
import { R5_MedicinalProductClinicals_Population } from './R5_MedicinalProductClinicals_Population'
import { R5_MedicinalProductClinicals_TherapeuticIndication } from './R5_MedicinalProductClinicals_TherapeuticIndication'

export class R5_MedicinalProductClinicals_Contraindication      extends R5_BackboneElement
{

   static def : string = 'MedicinalProductClinicals_Contraindication';
   disease : R5_CodeableConcept ;
   diseaseStatus : R5_CodeableConcept ;
   comorbidity : R5_CodeableConcept [];
   therapeuticIndication : R5_MedicinalProductClinicals_TherapeuticIndication [];
   otherTherapy : R5_MedicinalProductClinicals_OtherTherapy [];
   population : R5_MedicinalProductClinicals_Population [];
}

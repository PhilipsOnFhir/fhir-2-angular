import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductContraindication_OtherTherapy } from './R4_1_MedicinalProductContraindication_OtherTherapy'
import { R4_1_Population } from './R4_1_Population'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductContraindication      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductContraindication';
   subject : R4_1_Reference [];
   disease : R4_1_CodeableConcept ;
   diseaseStatus : R4_1_CodeableConcept ;
   comorbidity : R4_1_CodeableConcept [];
   therapeuticIndication : R4_1_Reference [];
   otherTherapy : R4_1_MedicinalProductContraindication_OtherTherapy [];
   population : R4_1_Population [];
}

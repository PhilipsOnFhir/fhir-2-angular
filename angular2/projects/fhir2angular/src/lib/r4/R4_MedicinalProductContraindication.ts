import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductContraindication_OtherTherapy } from './R4_MedicinalProductContraindication_OtherTherapy'
import { R4_Population } from './R4_Population'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductContraindication      extends R4_DomainResource
{

   static def : string = 'MedicinalProductContraindication';
   subject : R4_Reference [];
   disease : R4_CodeableConcept ;
   diseaseStatus : R4_CodeableConcept ;
   comorbidity : R4_CodeableConcept [];
   therapeuticIndication : R4_Reference [];
   otherTherapy : R4_MedicinalProductContraindication_OtherTherapy [];
   population : R4_Population [];
}

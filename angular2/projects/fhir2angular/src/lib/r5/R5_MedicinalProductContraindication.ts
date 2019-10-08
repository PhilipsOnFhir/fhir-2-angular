import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductContraindication_OtherTherapy } from './R5_MedicinalProductContraindication_OtherTherapy'
import { R5_Population } from './R5_Population'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductContraindication      extends R5_DomainResource
{

   static def : string = 'MedicinalProductContraindication';
   subject : R5_Reference [];
   disease : R5_CodeableConcept ;
   diseaseStatus : R5_CodeableConcept ;
   comorbidity : R5_CodeableConcept [];
   therapeuticIndication : R5_Reference [];
   otherTherapy : R5_MedicinalProductContraindication_OtherTherapy [];
   population : R5_Population [];
}

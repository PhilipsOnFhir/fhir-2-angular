import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_MedicinalProductIndication_OtherTherapy } from './R4_1_MedicinalProductIndication_OtherTherapy'
import { R4_1_Population } from './R4_1_Population'
import { R4_1_Quantity } from './R4_1_Quantity'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_MedicinalProductIndication      extends R4_1_DomainResource
{

   static def : string = 'MedicinalProductIndication';
   subject : R4_1_Reference [];
   diseaseSymptomProcedure : R4_1_CodeableConcept ;
   diseaseStatus : R4_1_CodeableConcept ;
   comorbidity : R4_1_CodeableConcept [];
   intendedEffect : R4_1_CodeableConcept ;
   duration : R4_1_Quantity ;
   otherTherapy : R4_1_MedicinalProductIndication_OtherTherapy [];
   undesirableEffect : R4_1_Reference [];
   population : R4_1_Population [];
}

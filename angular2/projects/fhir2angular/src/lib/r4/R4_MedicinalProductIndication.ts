import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_MedicinalProductIndication_OtherTherapy } from './R4_MedicinalProductIndication_OtherTherapy'
import { R4_Population } from './R4_Population'
import { R4_Quantity } from './R4_Quantity'
import { R4_Reference } from './R4_Reference'

export class R4_MedicinalProductIndication      extends R4_DomainResource
{

   static def : string = 'MedicinalProductIndication';
   subject : R4_Reference [];
   diseaseSymptomProcedure : R4_CodeableConcept ;
   diseaseStatus : R4_CodeableConcept ;
   comorbidity : R4_CodeableConcept [];
   intendedEffect : R4_CodeableConcept ;
   duration : R4_Quantity ;
   otherTherapy : R4_MedicinalProductIndication_OtherTherapy [];
   undesirableEffect : R4_Reference [];
   population : R4_Population [];
}

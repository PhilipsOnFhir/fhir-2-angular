import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_MedicinalProductIndication_OtherTherapy } from './R5_MedicinalProductIndication_OtherTherapy'
import { R5_Population } from './R5_Population'
import { R5_Quantity } from './R5_Quantity'
import { R5_Reference } from './R5_Reference'

export class R5_MedicinalProductIndication      extends R5_DomainResource
{

   static def : string = 'MedicinalProductIndication';
   subject : R5_Reference [];
   diseaseSymptomProcedure : R5_CodeableConcept ;
   diseaseStatus : R5_CodeableConcept ;
   comorbidity : R5_CodeableConcept [];
   intendedEffect : R5_CodeableConcept ;
   duration : R5_Quantity ;
   otherTherapy : R5_MedicinalProductIndication_OtherTherapy [];
   undesirableEffect : R5_Reference [];
   population : R5_Population [];
}

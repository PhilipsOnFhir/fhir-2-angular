import { R4_1_Annotation } from './R4_1_Annotation'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Condition_Evidence } from './R4_1_Condition_Evidence'
import { R4_1_Condition_Stage } from './R4_1_Condition_Stage'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Range } from './R4_1_Range'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Condition      extends R4_1_DomainResource
{

   static def : string = 'Condition';
   identifier : R4_1_Identifier [];
   clinicalStatus : R4_1_CodeableConcept ;
   verificationStatus : R4_1_CodeableConcept ;
   category : R4_1_CodeableConcept [];
   severity : R4_1_CodeableConcept ;
   code : R4_1_CodeableConcept ;
   bodySite : R4_1_CodeableConcept [];
   subject : R4_1_Reference ;
   encounter : R4_1_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : R4_1_Period ;
   onsetRange : R4_1_Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementAge : string ;
   abatementPeriod : R4_1_Period ;
   abatementRange : R4_1_Range ;
   abatementString : string ;
   recordedDate : string ;
   recorder : R4_1_Reference ;
   asserter : R4_1_Reference ;
   stage : R4_1_Condition_Stage [];
   evidence : R4_1_Condition_Evidence [];
   note : R4_1_Annotation [];
}

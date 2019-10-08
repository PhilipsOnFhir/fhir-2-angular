import { R4_Annotation } from './R4_Annotation'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Condition_Evidence } from './R4_Condition_Evidence'
import { R4_Condition_Stage } from './R4_Condition_Stage'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_Period } from './R4_Period'
import { R4_Range } from './R4_Range'
import { R4_Reference } from './R4_Reference'

export class R4_Condition      extends R4_DomainResource
{

   static def : string = 'Condition';
   identifier : R4_Identifier [];
   clinicalStatus : R4_CodeableConcept ;
   verificationStatus : R4_CodeableConcept ;
   category : R4_CodeableConcept [];
   severity : R4_CodeableConcept ;
   code : R4_CodeableConcept ;
   bodySite : R4_CodeableConcept [];
   subject : R4_Reference ;
   encounter : R4_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : R4_Period ;
   onsetRange : R4_Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementAge : string ;
   abatementPeriod : R4_Period ;
   abatementRange : R4_Range ;
   abatementString : string ;
   recordedDate : string ;
   recorder : R4_Reference ;
   asserter : R4_Reference ;
   stage : R4_Condition_Stage [];
   evidence : R4_Condition_Evidence [];
   note : R4_Annotation [];
}

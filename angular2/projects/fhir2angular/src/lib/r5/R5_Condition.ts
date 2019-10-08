import { R5_Annotation } from './R5_Annotation'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Condition_Evidence } from './R5_Condition_Evidence'
import { R5_Condition_Stage } from './R5_Condition_Stage'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_Period } from './R5_Period'
import { R5_Range } from './R5_Range'
import { R5_Reference } from './R5_Reference'

export class R5_Condition      extends R5_DomainResource
{

   static def : string = 'Condition';
   identifier : R5_Identifier [];
   clinicalStatus : R5_CodeableConcept ;
   verificationStatus : R5_CodeableConcept ;
   category : R5_CodeableConcept [];
   severity : R5_CodeableConcept ;
   code : R5_CodeableConcept ;
   bodySite : R5_CodeableConcept [];
   subject : R5_Reference ;
   encounter : R5_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : R5_Period ;
   onsetRange : R5_Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementAge : string ;
   abatementPeriod : R5_Period ;
   abatementRange : R5_Range ;
   abatementString : string ;
   recordedDate : string ;
   recorder : R5_Reference ;
   asserter : R5_Reference ;
   stage : R5_Condition_Stage [];
   evidence : R5_Condition_Evidence [];
   note : R5_Annotation [];
}

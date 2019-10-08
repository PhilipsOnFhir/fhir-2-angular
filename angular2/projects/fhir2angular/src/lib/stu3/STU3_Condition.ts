import { STU3_Annotation } from './STU3_Annotation'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_ConditionClinicalStatusCodesEnum } from './STU3_ConditionClinicalStatusCodesEnum'
import { STU3_ConditionVerificationStatusEnum } from './STU3_ConditionVerificationStatusEnum'
import { STU3_Condition_Evidence } from './STU3_Condition_Evidence'
import { STU3_Condition_Stage } from './STU3_Condition_Stage'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_Period } from './STU3_Period'
import { STU3_Range } from './STU3_Range'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Condition      extends STU3_DomainResource
{

   static def : string = 'Condition';
   identifier : STU3_Identifier [];
   clinicalStatus : STU3_ConditionClinicalStatusCodesEnum ;
   verificationStatus : STU3_ConditionVerificationStatusEnum ;
   category : STU3_CodeableConcept [];
   severity : STU3_CodeableConcept ;
   code : STU3_CodeableConcept ;
   bodySite : STU3_CodeableConcept [];
   subject : STU3_Reference ;
   context : STU3_Reference ;
   onsetDateTime : string ;
   onsetAge : string ;
   onsetPeriod : STU3_Period ;
   onsetRange : STU3_Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementAge : string ;
   abatementBoolean : boolean ;
   abatementPeriod : STU3_Period ;
   abatementRange : STU3_Range ;
   abatementString : string ;
   assertedDate : string ;
   asserter : STU3_Reference ;
   stage : STU3_Condition_Stage ;
   evidence : STU3_Condition_Evidence [];
   note : STU3_Annotation [];
}

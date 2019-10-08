import { DSTU2_Age } from './DSTU2_Age'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_ConditionVerificationStatusEnum } from './DSTU2_ConditionVerificationStatusEnum'
import { DSTU2_Condition_Evidence } from './DSTU2_Condition_Evidence'
import { DSTU2_Condition_Stage } from './DSTU2_Condition_Stage'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Period } from './DSTU2_Period'
import { DSTU2_Range } from './DSTU2_Range'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Condition      extends DSTU2_DomainResource
{

   static def : string = 'Condition';
   identifier : DSTU2_Identifier [];
   patient : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   asserter : DSTU2_Reference ;
   dateRecorded : string ;
   code : DSTU2_CodeableConcept ;
   category : DSTU2_CodeableConcept ;
   clinicalStatus : string ;
   verificationStatus : DSTU2_ConditionVerificationStatusEnum ;
   severity : DSTU2_CodeableConcept ;
   onsetDateTime : string ;
   onsetQuantity : DSTU2_Age ;
   onsetPeriod : DSTU2_Period ;
   onsetRange : DSTU2_Range ;
   onsetString : string ;
   abatementDateTime : string ;
   abatementQuantity : DSTU2_Age ;
   abatementBoolean : boolean ;
   abatementPeriod : DSTU2_Period ;
   abatementRange : DSTU2_Range ;
   abatementString : string ;
   stage : DSTU2_Condition_Stage ;
   evidence : DSTU2_Condition_Evidence [];
   bodySite : DSTU2_CodeableConcept [];
   notes : string ;
}

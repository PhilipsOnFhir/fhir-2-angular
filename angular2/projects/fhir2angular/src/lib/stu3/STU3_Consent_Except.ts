import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_Coding } from './STU3_Coding'
import { STU3_ConsentExceptTypeEnum } from './STU3_ConsentExceptTypeEnum'
import { STU3_Consent_Actor1 } from './STU3_Consent_Actor1'
import { STU3_Consent_Data1 } from './STU3_Consent_Data1'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Period } from './STU3_Period'

export class STU3_Consent_Except      extends STU3_BackboneElement
{

   static def : string = 'Consent_Except';
   type : STU3_ConsentExceptTypeEnum ;
   period : STU3_Period ;
   actor : STU3_Consent_Actor1 [];
   action : STU3_CodeableConcept [];
   securityLabel : STU3_Coding [];
   purpose : STU3_Coding [];
   class : STU3_Coding [];
   code : STU3_Coding [];
   dataPeriod : STU3_Period ;
   data : STU3_Consent_Data1 [];
}

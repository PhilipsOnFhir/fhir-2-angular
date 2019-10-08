import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_Coding } from './R4_1_Coding'
import { R4_1_ConsentProvisionTypeEnum } from './R4_1_ConsentProvisionTypeEnum'
import { R4_1_Consent_Actor } from './R4_1_Consent_Actor'
import { R4_1_Consent_Data } from './R4_1_Consent_Data'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'

export class R4_1_Consent_Provision      extends R4_1_BackboneElement
{

   static def : string = 'Consent_Provision';
   type : R4_1_ConsentProvisionTypeEnum ;
   period : R4_1_Period ;
   actor : R4_1_Consent_Actor [];
   action : R4_1_CodeableConcept [];
   securityLabel : R4_1_Coding [];
   purpose : R4_1_Coding [];
   class : R4_1_Coding [];
   code : R4_1_CodeableConcept [];
   dataPeriod : R4_1_Period ;
   data : R4_1_Consent_Data [];
   provision : R4_1_Consent_Provision [];
}

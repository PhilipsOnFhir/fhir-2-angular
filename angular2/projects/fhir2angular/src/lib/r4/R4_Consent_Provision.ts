import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_Coding } from './R4_Coding'
import { R4_ConsentProvisionTypeEnum } from './R4_ConsentProvisionTypeEnum'
import { R4_Consent_Actor } from './R4_Consent_Actor'
import { R4_Consent_Data } from './R4_Consent_Data'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'

export class R4_Consent_Provision      extends R4_BackboneElement
{

   static def : string = 'Consent_Provision';
   type : R4_ConsentProvisionTypeEnum ;
   period : R4_Period ;
   actor : R4_Consent_Actor [];
   action : R4_CodeableConcept [];
   securityLabel : R4_Coding [];
   purpose : R4_Coding [];
   class : R4_Coding [];
   code : R4_CodeableConcept [];
   dataPeriod : R4_Period ;
   data : R4_Consent_Data [];
   provision : R4_Consent_Provision [];
}

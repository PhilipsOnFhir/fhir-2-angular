import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_Coding } from './R5_Coding'
import { R5_ConsentProvisionTypeEnum } from './R5_ConsentProvisionTypeEnum'
import { R5_Consent_Actor } from './R5_Consent_Actor'
import { R5_Consent_Data } from './R5_Consent_Data'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'

export class R5_Consent_Provision      extends R5_BackboneElement
{

   static def : string = 'Consent_Provision';
   type : R5_ConsentProvisionTypeEnum ;
   period : R5_Period ;
   actor : R5_Consent_Actor [];
   action : R5_CodeableConcept [];
   securityLabel : R5_Coding [];
   purpose : R5_Coding [];
   class : R5_Coding [];
   code : R5_CodeableConcept [];
   dataPeriod : R5_Period ;
   data : R5_Consent_Data [];
   provision : R5_Consent_Provision [];
}

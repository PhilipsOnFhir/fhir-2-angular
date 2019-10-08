import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_Reference } from './DSTU2_Reference'
import { DSTU2_RiskAssessment_Prediction } from './DSTU2_RiskAssessment_Prediction'

export class DSTU2_RiskAssessment      extends DSTU2_DomainResource
{

   static def : string = 'RiskAssessment';
   subject : DSTU2_Reference ;
   date : string ;
   condition : DSTU2_Reference ;
   encounter : DSTU2_Reference ;
   performer : DSTU2_Reference ;
   identifier : DSTU2_Identifier ;
   method : DSTU2_CodeableConcept ;
   basis : DSTU2_Reference [];
   prediction : DSTU2_RiskAssessment_Prediction [];
   mitigation : string ;
}

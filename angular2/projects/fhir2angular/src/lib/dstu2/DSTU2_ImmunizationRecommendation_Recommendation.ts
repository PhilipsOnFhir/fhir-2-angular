import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_CodeableConcept } from './DSTU2_CodeableConcept'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_ImmunizationRecommendation_DateCriterion } from './DSTU2_ImmunizationRecommendation_DateCriterion'
import { DSTU2_ImmunizationRecommendation_Protocol } from './DSTU2_ImmunizationRecommendation_Protocol'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImmunizationRecommendation_Recommendation      extends DSTU2_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   date : string ;
   vaccineCode : DSTU2_CodeableConcept ;
   doseNumber : string ;
   forecastStatus : DSTU2_CodeableConcept ;
   dateCriterion : DSTU2_ImmunizationRecommendation_DateCriterion [];
   protocol : DSTU2_ImmunizationRecommendation_Protocol ;
   supportingImmunization : DSTU2_Reference [];
   supportingPatientInformation : DSTU2_Reference [];
}

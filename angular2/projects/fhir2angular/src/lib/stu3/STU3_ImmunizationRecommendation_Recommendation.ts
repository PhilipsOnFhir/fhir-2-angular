import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_ImmunizationRecommendation_DateCriterion } from './STU3_ImmunizationRecommendation_DateCriterion'
import { STU3_ImmunizationRecommendation_Protocol } from './STU3_ImmunizationRecommendation_Protocol'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImmunizationRecommendation_Recommendation      extends STU3_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   date : string ;
   vaccineCode : STU3_CodeableConcept ;
   targetDisease : STU3_CodeableConcept ;
   doseNumber : string ;
   forecastStatus : STU3_CodeableConcept ;
   dateCriterion : STU3_ImmunizationRecommendation_DateCriterion [];
   protocol : STU3_ImmunizationRecommendation_Protocol ;
   supportingImmunization : STU3_Reference [];
   supportingPatientInformation : STU3_Reference [];
}

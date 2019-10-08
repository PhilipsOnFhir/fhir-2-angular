import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_ImmunizationRecommendation_DateCriterion } from './R4_1_ImmunizationRecommendation_DateCriterion'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImmunizationRecommendation_Recommendation      extends R4_1_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   vaccineCode : R4_1_CodeableConcept [];
   targetDisease : R4_1_CodeableConcept ;
   contraindicatedVaccineCode : R4_1_CodeableConcept [];
   forecastStatus : R4_1_CodeableConcept ;
   forecastReason : R4_1_CodeableConcept [];
   dateCriterion : R4_1_ImmunizationRecommendation_DateCriterion [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
   supportingImmunization : R4_1_Reference [];
   supportingPatientInformation : R4_1_Reference [];
}

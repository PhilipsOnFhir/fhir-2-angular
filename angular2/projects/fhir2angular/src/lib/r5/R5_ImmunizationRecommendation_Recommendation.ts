import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_ImmunizationRecommendation_DateCriterion } from './R5_ImmunizationRecommendation_DateCriterion'
import { R5_Reference } from './R5_Reference'

export class R5_ImmunizationRecommendation_Recommendation      extends R5_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   vaccineCode : R5_CodeableConcept [];
   targetDisease : R5_CodeableConcept ;
   contraindicatedVaccineCode : R5_CodeableConcept [];
   forecastStatus : R5_CodeableConcept ;
   forecastReason : R5_CodeableConcept [];
   dateCriterion : R5_ImmunizationRecommendation_DateCriterion [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
   supportingImmunization : R5_Reference [];
   supportingPatientInformation : R5_Reference [];
}

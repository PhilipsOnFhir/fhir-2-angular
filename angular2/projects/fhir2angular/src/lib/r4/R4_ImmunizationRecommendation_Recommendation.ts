import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_ImmunizationRecommendation_DateCriterion } from './R4_ImmunizationRecommendation_DateCriterion'
import { R4_Reference } from './R4_Reference'

export class R4_ImmunizationRecommendation_Recommendation      extends R4_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Recommendation';
   vaccineCode : R4_CodeableConcept [];
   targetDisease : R4_CodeableConcept ;
   contraindicatedVaccineCode : R4_CodeableConcept [];
   forecastStatus : R4_CodeableConcept ;
   forecastReason : R4_CodeableConcept [];
   dateCriterion : R4_ImmunizationRecommendation_DateCriterion [];
   description : string ;
   series : string ;
   doseNumberPositiveInt : string ;
   doseNumberString : string ;
   seriesDosesPositiveInt : string ;
   seriesDosesString : string ;
   supportingImmunization : R4_Reference [];
   supportingPatientInformation : R4_Reference [];
}

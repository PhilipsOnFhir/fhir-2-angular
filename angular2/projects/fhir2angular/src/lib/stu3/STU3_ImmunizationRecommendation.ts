import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Identifier } from './STU3_Identifier'
import { STU3_ImmunizationRecommendation_Recommendation } from './STU3_ImmunizationRecommendation_Recommendation'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImmunizationRecommendation      extends STU3_DomainResource
{

   static def : string = 'ImmunizationRecommendation';
   identifier : STU3_Identifier [];
   patient : STU3_Reference ;
   recommendation : STU3_ImmunizationRecommendation_Recommendation [];
}

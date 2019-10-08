import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Identifier } from './R4_1_Identifier'
import { R4_1_ImmunizationRecommendation_Recommendation } from './R4_1_ImmunizationRecommendation_Recommendation'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImmunizationRecommendation      extends R4_1_DomainResource
{

   static def : string = 'ImmunizationRecommendation';
   identifier : R4_1_Identifier [];
   patient : R4_1_Reference ;
   date : string ;
   authority : R4_1_Reference ;
   recommendation : R4_1_ImmunizationRecommendation_Recommendation [];
}

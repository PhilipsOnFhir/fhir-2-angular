import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Identifier } from './DSTU2_Identifier'
import { DSTU2_ImmunizationRecommendation_Recommendation } from './DSTU2_ImmunizationRecommendation_Recommendation'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImmunizationRecommendation      extends DSTU2_DomainResource
{

   static def : string = 'ImmunizationRecommendation';
   identifier : DSTU2_Identifier [];
   patient : DSTU2_Reference ;
   recommendation : DSTU2_ImmunizationRecommendation_Recommendation [];
}

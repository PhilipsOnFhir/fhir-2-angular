import { R4_DomainResource } from './R4_DomainResource'
import { R4_Identifier } from './R4_Identifier'
import { R4_ImmunizationRecommendation_Recommendation } from './R4_ImmunizationRecommendation_Recommendation'
import { R4_Reference } from './R4_Reference'

export class R4_ImmunizationRecommendation      extends R4_DomainResource
{

   static def : string = 'ImmunizationRecommendation';
   identifier : R4_Identifier [];
   patient : R4_Reference ;
   date : string ;
   authority : R4_Reference ;
   recommendation : R4_ImmunizationRecommendation_Recommendation [];
}

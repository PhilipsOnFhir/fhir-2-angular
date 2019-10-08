import { R5_DomainResource } from './R5_DomainResource'
import { R5_Identifier } from './R5_Identifier'
import { R5_ImmunizationRecommendation_Recommendation } from './R5_ImmunizationRecommendation_Recommendation'
import { R5_Reference } from './R5_Reference'

export class R5_ImmunizationRecommendation      extends R5_DomainResource
{

   static def : string = 'ImmunizationRecommendation';
   identifier : R5_Identifier [];
   patient : R5_Reference ;
   date : string ;
   authority : R5_Reference ;
   recommendation : R5_ImmunizationRecommendation_Recommendation [];
}

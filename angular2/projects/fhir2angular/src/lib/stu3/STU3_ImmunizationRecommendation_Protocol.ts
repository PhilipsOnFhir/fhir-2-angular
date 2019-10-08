import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImmunizationRecommendation_Protocol      extends STU3_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Protocol';
   doseSequence : string ;
   description : string ;
   authority : STU3_Reference ;
   series : string ;
}

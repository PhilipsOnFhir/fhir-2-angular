import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_ImmunizationRecommendation_Protocol      extends DSTU2_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Protocol';
   doseSequence : string ;
   description : string ;
   authority : DSTU2_Reference ;
   series : string ;
}

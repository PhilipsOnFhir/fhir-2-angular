import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_ImmunizationRecommendation_Protocol      extends R4_BackboneElement
{

   static def : string = 'ImmunizationRecommendation_Protocol';
   doseSequence : string ;
   description : string ;
   authority : R4_Reference ;
   series : string ;
}

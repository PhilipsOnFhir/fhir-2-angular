import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CoverageEligibilityRequest_Insurance      extends R4_1_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_Insurance';
   focal : boolean ;
   coverage : R4_1_Reference ;
   businessArrangement : string ;
}

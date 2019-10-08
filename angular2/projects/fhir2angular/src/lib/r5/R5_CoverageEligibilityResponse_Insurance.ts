import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CoverageEligibilityResponse_Item } from './R5_CoverageEligibilityResponse_Item'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Period } from './R5_Period'
import { R5_Reference } from './R5_Reference'

export class R5_CoverageEligibilityResponse_Insurance      extends R5_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Insurance';
   coverage : R5_Reference ;
   inforce : boolean ;
   benefitPeriod : R5_Period ;
   item : R5_CoverageEligibilityResponse_Item [];
}

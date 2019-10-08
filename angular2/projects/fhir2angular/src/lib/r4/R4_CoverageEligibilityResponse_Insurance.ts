import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CoverageEligibilityResponse_Item } from './R4_CoverageEligibilityResponse_Item'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Period } from './R4_Period'
import { R4_Reference } from './R4_Reference'

export class R4_CoverageEligibilityResponse_Insurance      extends R4_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Insurance';
   coverage : R4_Reference ;
   inforce : boolean ;
   benefitPeriod : R4_Period ;
   item : R4_CoverageEligibilityResponse_Item [];
}

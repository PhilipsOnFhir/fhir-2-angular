import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CoverageEligibilityResponse_Item } from './R4_1_CoverageEligibilityResponse_Item'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Period } from './R4_1_Period'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CoverageEligibilityResponse_Insurance      extends R4_1_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Insurance';
   coverage : R4_1_Reference ;
   inforce : boolean ;
   benefitPeriod : R4_1_Period ;
   item : R4_1_CoverageEligibilityResponse_Item [];
}

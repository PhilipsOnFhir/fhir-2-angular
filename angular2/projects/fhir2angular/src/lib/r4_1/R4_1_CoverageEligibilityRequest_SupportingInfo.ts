import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_CoverageEligibilityRequest_SupportingInfo      extends R4_1_BackboneElement
{

   static def : string = 'CoverageEligibilityRequest_SupportingInfo';
   sequence : string ;
   information : R4_1_Reference ;
   appliesToAll : boolean ;
}

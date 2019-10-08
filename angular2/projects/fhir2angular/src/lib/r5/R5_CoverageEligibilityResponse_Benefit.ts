import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Money } from './R5_Money'

export class R5_CoverageEligibilityResponse_Benefit      extends R5_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Benefit';
   type : R5_CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : R5_Money ;
   usedUnsignedInt : string ;
   usedString : string ;
   usedMoney : R5_Money ;
}

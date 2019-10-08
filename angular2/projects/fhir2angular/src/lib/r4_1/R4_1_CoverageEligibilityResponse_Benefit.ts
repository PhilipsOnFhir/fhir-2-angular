import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Money } from './R4_1_Money'

export class R4_1_CoverageEligibilityResponse_Benefit      extends R4_1_BackboneElement
{

   static def : string = 'CoverageEligibilityResponse_Benefit';
   type : R4_1_CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : R4_1_Money ;
   usedUnsignedInt : string ;
   usedString : string ;
   usedMoney : R4_1_Money ;
}

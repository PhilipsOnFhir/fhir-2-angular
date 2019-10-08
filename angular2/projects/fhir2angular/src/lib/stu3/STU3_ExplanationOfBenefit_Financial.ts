import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ExplanationOfBenefit_Financial      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Financial';
   type : STU3_CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : string ;
   usedUnsignedInt : string ;
   usedMoney : string ;
}

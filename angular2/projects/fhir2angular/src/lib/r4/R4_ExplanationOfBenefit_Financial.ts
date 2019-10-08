import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Money } from './R4_Money'

export class R4_ExplanationOfBenefit_Financial      extends R4_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Financial';
   type : R4_CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : R4_Money ;
   usedUnsignedInt : string ;
   usedMoney : R4_Money ;
}

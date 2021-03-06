import { BackboneElement } from './BackboneElement'
import { CodeableConcept } from './CodeableConcept'
import { DomainResource } from './DomainResource'
import { Money } from './Money'

export class ExplanationOfBenefit_Financial      extends BackboneElement
{

   static def : string = 'ExplanationOfBenefit_Financial';
   type : CodeableConcept ;
   allowedUnsignedInt : string ;
   allowedString : string ;
   allowedMoney : Money ;
   usedUnsignedInt : string ;
   usedMoney : Money ;
}

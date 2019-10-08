import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstancePolymer_RepeatUnit } from './R5_SubstancePolymer_RepeatUnit'

export class R5_SubstancePolymer_Repeat      extends R5_BackboneElement
{

   static def : string = 'SubstancePolymer_Repeat';
   numberOfUnits : string ;
   averageMolecularFormula : string ;
   repeatUnitAmountType : R5_CodeableConcept ;
   repeatUnit : R5_SubstancePolymer_RepeatUnit [];
}

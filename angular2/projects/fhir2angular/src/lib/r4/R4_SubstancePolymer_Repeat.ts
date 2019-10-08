import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstancePolymer_RepeatUnit } from './R4_SubstancePolymer_RepeatUnit'

export class R4_SubstancePolymer_Repeat      extends R4_BackboneElement
{

   static def : string = 'SubstancePolymer_Repeat';
   numberOfUnits : string ;
   averageMolecularFormula : string ;
   repeatUnitAmountType : R4_CodeableConcept ;
   repeatUnit : R4_SubstancePolymer_RepeatUnit [];
}

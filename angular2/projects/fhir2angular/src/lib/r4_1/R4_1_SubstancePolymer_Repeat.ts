import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstancePolymer_RepeatUnit } from './R4_1_SubstancePolymer_RepeatUnit'

export class R4_1_SubstancePolymer_Repeat      extends R4_1_BackboneElement
{

   static def : string = 'SubstancePolymer_Repeat';
   numberOfUnits : string ;
   averageMolecularFormula : string ;
   repeatUnitAmountType : R4_1_CodeableConcept ;
   repeatUnit : R4_1_SubstancePolymer_RepeatUnit [];
}

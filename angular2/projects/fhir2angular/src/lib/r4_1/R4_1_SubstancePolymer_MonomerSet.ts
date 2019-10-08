import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstancePolymer_StartingMaterial } from './R4_1_SubstancePolymer_StartingMaterial'

export class R4_1_SubstancePolymer_MonomerSet      extends R4_1_BackboneElement
{

   static def : string = 'SubstancePolymer_MonomerSet';
   ratioType : R4_1_CodeableConcept ;
   startingMaterial : R4_1_SubstancePolymer_StartingMaterial [];
}

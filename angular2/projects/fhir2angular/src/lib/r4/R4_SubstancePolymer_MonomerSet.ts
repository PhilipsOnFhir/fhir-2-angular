import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstancePolymer_StartingMaterial } from './R4_SubstancePolymer_StartingMaterial'

export class R4_SubstancePolymer_MonomerSet      extends R4_BackboneElement
{

   static def : string = 'SubstancePolymer_MonomerSet';
   ratioType : R4_CodeableConcept ;
   startingMaterial : R4_SubstancePolymer_StartingMaterial [];
}

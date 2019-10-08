import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstancePolymer_StartingMaterial } from './R5_SubstancePolymer_StartingMaterial'

export class R5_SubstancePolymer_MonomerSet      extends R5_BackboneElement
{

   static def : string = 'SubstancePolymer_MonomerSet';
   ratioType : R5_CodeableConcept ;
   startingMaterial : R5_SubstancePolymer_StartingMaterial [];
}

import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceAmount } from './R4_1_SubstanceAmount'

export class R4_1_SubstancePolymer_StartingMaterial      extends R4_1_BackboneElement
{

   static def : string = 'SubstancePolymer_StartingMaterial';
   material : R4_1_CodeableConcept ;
   type : R4_1_CodeableConcept ;
   isDefining : boolean ;
   amount : R4_1_SubstanceAmount ;
}

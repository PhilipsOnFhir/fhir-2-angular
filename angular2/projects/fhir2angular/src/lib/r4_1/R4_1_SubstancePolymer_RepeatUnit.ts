import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_CodeableConcept } from './R4_1_CodeableConcept'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_SubstanceAmount } from './R4_1_SubstanceAmount'
import { R4_1_SubstancePolymer_DegreeOfPolymerisation } from './R4_1_SubstancePolymer_DegreeOfPolymerisation'
import { R4_1_SubstancePolymer_StructuralRepresentation } from './R4_1_SubstancePolymer_StructuralRepresentation'

export class R4_1_SubstancePolymer_RepeatUnit      extends R4_1_BackboneElement
{

   static def : string = 'SubstancePolymer_RepeatUnit';
   orientationOfPolymerisation : R4_1_CodeableConcept ;
   repeatUnit : string ;
   amount : R4_1_SubstanceAmount ;
   degreeOfPolymerisation : R4_1_SubstancePolymer_DegreeOfPolymerisation [];
   structuralRepresentation : R4_1_SubstancePolymer_StructuralRepresentation [];
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceAmount } from './R4_SubstanceAmount'
import { R4_SubstancePolymer_DegreeOfPolymerisation } from './R4_SubstancePolymer_DegreeOfPolymerisation'
import { R4_SubstancePolymer_StructuralRepresentation } from './R4_SubstancePolymer_StructuralRepresentation'

export class R4_SubstancePolymer_RepeatUnit      extends R4_BackboneElement
{

   static def : string = 'SubstancePolymer_RepeatUnit';
   orientationOfPolymerisation : R4_CodeableConcept ;
   repeatUnit : string ;
   amount : R4_SubstanceAmount ;
   degreeOfPolymerisation : R4_SubstancePolymer_DegreeOfPolymerisation [];
   structuralRepresentation : R4_SubstancePolymer_StructuralRepresentation [];
}

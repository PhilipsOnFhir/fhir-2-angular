import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceAmount } from './R5_SubstanceAmount'
import { R5_SubstancePolymer_DegreeOfPolymerisation } from './R5_SubstancePolymer_DegreeOfPolymerisation'
import { R5_SubstancePolymer_StructuralRepresentation } from './R5_SubstancePolymer_StructuralRepresentation'

export class R5_SubstancePolymer_RepeatUnit      extends R5_BackboneElement
{

   static def : string = 'SubstancePolymer_RepeatUnit';
   orientationOfPolymerisation : R5_CodeableConcept ;
   repeatUnit : string ;
   amount : R5_SubstanceAmount ;
   degreeOfPolymerisation : R5_SubstancePolymer_DegreeOfPolymerisation [];
   structuralRepresentation : R5_SubstancePolymer_StructuralRepresentation [];
}

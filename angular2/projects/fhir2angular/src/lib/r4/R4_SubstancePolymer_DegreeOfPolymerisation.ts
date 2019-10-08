import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_SubstanceAmount } from './R4_SubstanceAmount'

export class R4_SubstancePolymer_DegreeOfPolymerisation      extends R4_BackboneElement
{

   static def : string = 'SubstancePolymer_DegreeOfPolymerisation';
   degree : R4_CodeableConcept ;
   amount : R4_SubstanceAmount ;
}

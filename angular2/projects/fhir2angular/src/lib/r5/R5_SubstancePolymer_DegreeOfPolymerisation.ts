import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_CodeableConcept } from './R5_CodeableConcept'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_SubstanceAmount } from './R5_SubstanceAmount'

export class R5_SubstancePolymer_DegreeOfPolymerisation      extends R5_BackboneElement
{

   static def : string = 'SubstancePolymer_DegreeOfPolymerisation';
   degree : R5_CodeableConcept ;
   amount : R5_SubstanceAmount ;
}

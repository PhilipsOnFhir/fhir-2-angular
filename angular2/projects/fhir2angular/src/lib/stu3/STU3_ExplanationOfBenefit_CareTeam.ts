import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_CodeableConcept } from './STU3_CodeableConcept'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ExplanationOfBenefit_CareTeam      extends STU3_BackboneElement
{

   static def : string = 'ExplanationOfBenefit_CareTeam';
   sequence : string ;
   provider : STU3_Reference ;
   responsible : boolean ;
   role : STU3_CodeableConcept ;
   qualification : STU3_CodeableConcept ;
}

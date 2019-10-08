import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_CodeableConcept } from './R4_CodeableConcept'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Claim_CareTeam      extends R4_BackboneElement
{

   static def : string = 'Claim_CareTeam';
   sequence : string ;
   provider : R4_Reference ;
   responsible : boolean ;
   role : R4_CodeableConcept ;
   qualification : R4_CodeableConcept ;
}

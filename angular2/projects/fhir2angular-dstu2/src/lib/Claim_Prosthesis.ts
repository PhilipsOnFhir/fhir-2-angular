import { BackboneElement } from './BackboneElement'
import { Coding } from './Coding'
import { DomainResource } from './DomainResource'

export class Claim_Prosthesis      extends BackboneElement
{

   static def : string = 'Claim_Prosthesis';
   initial : boolean ;
   priorDate : string ;
   priorMaterial : Coding ;
}

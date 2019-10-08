import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_Coding } from './DSTU2_Coding'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'

export class DSTU2_Claim_Prosthesis      extends DSTU2_BackboneElement
{

   static def : string = 'Claim_Prosthesis';
   initial : boolean ;
   priorDate : string ;
   priorMaterial : DSTU2_Coding ;
}

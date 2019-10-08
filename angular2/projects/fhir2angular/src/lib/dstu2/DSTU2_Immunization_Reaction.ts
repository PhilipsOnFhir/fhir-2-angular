import { DSTU2_BackboneElement } from './DSTU2_BackboneElement'
import { DSTU2_DomainResource } from './DSTU2_DomainResource'
import { DSTU2_Reference } from './DSTU2_Reference'

export class DSTU2_Immunization_Reaction      extends DSTU2_BackboneElement
{

   static def : string = 'Immunization_Reaction';
   date : string ;
   detail : DSTU2_Reference ;
   reported : boolean ;
}

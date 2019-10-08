import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_Immunization_Reaction      extends R4_1_BackboneElement
{

   static def : string = 'Immunization_Reaction';
   date : string ;
   detail : R4_1_Reference ;
   reported : boolean ;
}

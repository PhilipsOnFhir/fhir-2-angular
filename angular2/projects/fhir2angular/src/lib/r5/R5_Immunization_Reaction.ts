import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_Immunization_Reaction      extends R5_BackboneElement
{

   static def : string = 'Immunization_Reaction';
   date : string ;
   detail : R5_Reference ;
   reported : boolean ;
}

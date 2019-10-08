import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_Immunization_Reaction      extends R4_BackboneElement
{

   static def : string = 'Immunization_Reaction';
   date : string ;
   detail : R4_Reference ;
   reported : boolean ;
}

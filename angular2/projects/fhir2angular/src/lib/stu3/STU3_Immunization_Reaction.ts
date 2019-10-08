import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_Immunization_Reaction      extends STU3_BackboneElement
{

   static def : string = 'Immunization_Reaction';
   date : string ;
   detail : STU3_Reference ;
   reported : boolean ;
}

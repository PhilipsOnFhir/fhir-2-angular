import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'
import { STU3_Reference } from './STU3_Reference'

export class STU3_ImplementationGuide_Resource      extends STU3_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   example : boolean ;
   name : string ;
   description : string ;
   acronym : string ;
   sourceUri : string ;
   sourceReference : STU3_Reference ;
   exampleFor : STU3_Reference ;
}

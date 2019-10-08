import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_Reference } from './R5_Reference'

export class R5_ImplementationGuide_Resource1      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource1';
   reference : R5_Reference ;
   exampleBoolean : boolean ;
   exampleCanonical : string ;
   relativePath : string ;
}

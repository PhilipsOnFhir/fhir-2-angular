import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_Reference } from './R4_Reference'

export class R4_ImplementationGuide_Resource1      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource1';
   reference : R4_Reference ;
   exampleBoolean : boolean ;
   exampleCanonical : string ;
   relativePath : string ;
}

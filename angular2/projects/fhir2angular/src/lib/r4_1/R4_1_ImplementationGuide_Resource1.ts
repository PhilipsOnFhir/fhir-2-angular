import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImplementationGuide_Resource1      extends R4_1_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource1';
   reference : R4_1_Reference ;
   exampleBoolean : boolean ;
   exampleCanonical : string ;
   relativePath : string ;
}

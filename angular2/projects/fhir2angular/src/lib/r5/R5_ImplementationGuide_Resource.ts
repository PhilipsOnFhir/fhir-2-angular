import { R5_BackboneElement } from './R5_BackboneElement'
import { R5_DomainResource } from './R5_DomainResource'
import { R5_FHIRVersionEnum } from './R5_FHIRVersionEnum'
import { R5_Reference } from './R5_Reference'

export class R5_ImplementationGuide_Resource      extends R5_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   reference : R5_Reference ;
   fhirVersion : R5_FHIRVersionEnum [];
   name : string ;
   description : string ;
   exampleBoolean : boolean ;
   exampleCanonical : string ;
   groupingId : string ;
}

import { R4_BackboneElement } from './R4_BackboneElement'
import { R4_DomainResource } from './R4_DomainResource'
import { R4_FHIRVersionEnum } from './R4_FHIRVersionEnum'
import { R4_Reference } from './R4_Reference'

export class R4_ImplementationGuide_Resource      extends R4_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   reference : R4_Reference ;
   fhirVersion : R4_FHIRVersionEnum [];
   name : string ;
   description : string ;
   exampleBoolean : boolean ;
   exampleCanonical : string ;
   groupingId : string ;
}

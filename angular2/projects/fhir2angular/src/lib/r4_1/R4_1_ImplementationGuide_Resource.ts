import { R4_1_BackboneElement } from './R4_1_BackboneElement'
import { R4_1_DomainResource } from './R4_1_DomainResource'
import { R4_1_FHIRVersionEnum } from './R4_1_FHIRVersionEnum'
import { R4_1_Reference } from './R4_1_Reference'

export class R4_1_ImplementationGuide_Resource      extends R4_1_BackboneElement
{

   static def : string = 'ImplementationGuide_Resource';
   reference : R4_1_Reference ;
   fhirVersion : R4_1_FHIRVersionEnum [];
   name : string ;
   description : string ;
   exampleBoolean : boolean ;
   exampleCanonical : string ;
   groupingId : string ;
}

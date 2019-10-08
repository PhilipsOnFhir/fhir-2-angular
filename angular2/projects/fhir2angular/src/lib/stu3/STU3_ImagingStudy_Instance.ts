import { STU3_BackboneElement } from './STU3_BackboneElement'
import { STU3_DomainResource } from './STU3_DomainResource'

export class STU3_ImagingStudy_Instance      extends STU3_BackboneElement
{

   static def : string = 'ImagingStudy_Instance';
   uid : string ;
   number : string ;
   sopClass : string ;
   title : string ;
}
